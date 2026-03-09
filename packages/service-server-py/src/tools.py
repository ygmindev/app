import logging

from playwright.async_api import Browser, Page, async_playwright

logger = logging.getLogger(__name__)


class BrowserManager:
    _browser: Browser | None = None
    _page: Page | None = None

    @classmethod
    async def get_page(cls) -> Page:
        if cls._browser is None or not cls._browser.is_connected():
            pw = await async_playwright().start()
            cls._browser = await pw.chromium.launch(
                headless=True,
                args=["--disable-blink-features=AutomationControlled"],
            )
            context = await cls._browser.new_context(
                user_agent=(
                    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                    "AppleWebKit/537.36 (KHTML, like Gecko) "
                    "Chrome/120.0.0.0 Safari/537.36"
                ),
                viewport={"width": 1920, "height": 1080},
            )
            cls._page = await context.new_page()
        return cls._page

    @classmethod
    async def close(cls):
        if cls._browser:
            await cls._browser.close()
            cls._browser = None
            cls._page = None


async def navigate(url: str, wait_ms: int = 3000) -> str:
    page = await BrowserManager.get_page()
    try:
        await page.goto(url, wait_until="domcontentloaded", timeout=30000)
        await page.wait_for_timeout(wait_ms)
        for sel in [
            "#sp-cc-accept",
            "[data-action='a-popover-close']",
            "input[data-action-type='DISMISS']",
        ]:
            try:
                if await page.locator(sel).count() > 0:
                    await page.locator(sel).first.click()
                    await page.wait_for_timeout(500)
            except Exception:
                pass
        return await page.title()
    except Exception as e:
        return f"ERROR: {e}"


async def scroll_down(pixels: int = 800) -> None:
    page = await BrowserManager.get_page()
    await page.evaluate(f"window.scrollBy(0, {pixels})")
    await page.wait_for_timeout(1500)


async def click_selector(css: str) -> bool:
    """Click an element. Returns True if clicked, False if not found."""
    page = await BrowserManager.get_page()
    try:
        loc = page.locator(css)
        if await loc.count() > 0:
            await loc.first.click()
            await page.wait_for_timeout(2000)
            return True
    except Exception:
        pass
    return False


async def get_dom_snapshot(max_elements: int = 150) -> str:
    """Simplified DOM tree for LLM analysis."""
    page = await BrowserManager.get_page()
    js = """
    (maxEl) => {
        let count = 0;
        function walk(el, depth) {
            if (count >= maxEl || depth > 5 || !el || el.nodeType !== 1) return '';
            const tag = el.tagName.toLowerCase();
            if (['script','style','noscript','svg','path','meta','link','head','br','hr'].includes(tag)) return '';
            count++;
            const id = el.id ? '#' + el.id : '';
            const cls = (typeof el.className === 'string' && el.className)
                ? '.' + el.className.trim().split(/\\s+/).slice(0,2).join('.') : '';
            const href = tag === 'a' ? (el.getAttribute('href')||'').substring(0,80) : '';
            const txt = el.children.length === 0 ? (el.textContent||'').trim().substring(0,50) : '';
            const pad = '  '.repeat(depth);
            let line = pad + '<' + tag + id + cls;
            if (href) line += ' href="' + href + '"';
            if (txt) line += ' "' + txt + '"';
            line += '>';
            const kids = Array.from(el.children).map(c => walk(c, depth+1)).filter(Boolean);
            return kids.length ? line + '\\n' + kids.join('\\n') : line;
        }
        return walk(document.body, 0) || 'EMPTY';
    }
    """
    try:
        return await page.evaluate(js, max_elements)
    except Exception as e:
        return f"ERROR: {e}"


async def extract_product_links() -> list[dict[str, str]]:
    page = await BrowserManager.get_page()
    js = """
    () => {
        const results = [];
        const seen = new Set();
        for (const a of document.querySelectorAll('a[href*="/dp/"]')) {
            const href = a.href || '';
            const m = href.match(/\\/dp\\/([A-Z0-9]{10})/);
            if (!m) continue;
            const asin = m[1];
            if (seen.has(asin)) continue;
            seen.add(asin);
            let title = a.textContent.trim();
            if (title.length < 3) {
                let p = a.parentElement;
                for (let i = 0; i < 3 && p; i++) {
                    const t = p.textContent.trim();
                    if (t.length > 5 && t.length < 300) { title = t; break; }
                    p = p.parentElement;
                }
            }
            if (title.length < 2) continue;
            results.push({url: 'https://www.amazon.com/dp/' + asin, title: title.substring(0,150)});
            if (results.length >= 40) break;
        }
        return results;
    }
    """
    try:
        return await page.evaluate(js)
    except Exception as e:
        logger.error(f"Link extraction failed: {e}")
        return []


async def extract_product_data() -> dict[str, str]:
    """Deterministic product page extraction."""
    page = await BrowserManager.get_page()
    js = """
    () => {
        const d = {};
        const q = s => { const e = document.querySelector(s); return e ? e.textContent.trim() : ''; };

        d.title = q('#productTitle');

        for (const sel of ['.a-price .a-offscreen','#corePrice_feature_div .a-offscreen',
            '#priceblock_ourprice','#apex_offerDisplay_desktop .a-offscreen']) {
            const e = document.querySelector(sel);
            if (e && e.textContent.trim()) { d.price = e.textContent.trim(); break; }
        }

        d.rating = q('#acrPopover .a-icon-alt');
        d.review_count = q('#acrCustomerReviewText');

        const bc = document.querySelectorAll('#wayfinding-breadcrumbs_feature_div a');
        if (bc.length) d.category = Array.from(bc).map(a=>a.textContent.trim()).filter(Boolean).join(' > ');

        const rows = document.querySelectorAll(
            '#productDetails_techSpec_section_1 tr,#productDetails_detailBullets_sections1 tr,table.a-keyvalue tr,#detailBullets_feature_div li'
        );
        for (const row of rows) {
            let k='',v='';
            const th=row.querySelector('th'),td=row.querySelector('td');
            if(th&&td){k=th.textContent.trim();v=td.textContent.trim();}
            else{const sp=row.querySelectorAll('.a-text-bold,span');
                if(sp.length>=2){k=sp[0].textContent.trim().replace(/[:\\u200F\\u200E]/g,'');
                v=row.textContent.replace(sp[0].textContent,'').trim().replace(/^[:\\s]+/,'');}}
            if(k&&v&&k.length<50){
                const nk=k.toLowerCase().replace(/[^a-z0-9]+/g,'_').replace(/^_|_$/g,'');
                if(nk)d[nk]=v.substring(0,300);}
        }

        const bul=document.querySelectorAll('#feature-bullets li span.a-list-item');
        if(bul.length)d.features=Array.from(bul).map(b=>b.textContent.trim()).filter(t=>t.length>5).slice(0,5).join(' | ');

        const br=document.querySelector('#bylineInfo,a#brand');
        if(br)d.brand=br.textContent.trim().replace(/^(Visit the |Brand: )/,'');

        for(const k of Object.keys(d)){if(!d[k])delete d[k];}
        return d;
    }
    """
    try:
        return await page.evaluate(js)
    except Exception as e:
        return {"error": str(e)}
