import { HttpImplementation } from '@lib/backend/http/utils/HttpImplementation/HttpImplementation';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import range from 'lodash/range';

const CATEGORIES: Array<{
  category: string;
  link: string;
  maxItems?: number;
}> = [
  {
    category: 'Building Materials',
    link: 'https://www.homedepot.com/b/Building-Materials/N-5yc1vZaqnsZbwo5l',
    maxItems: 5000,
  },
  // {
  //   category: 'Roofing & Attic',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Ventilation-Roofing-Attic-Ventilation/N-5yc1vZc663',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Truss',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Trusses/N-5yc1vZbtmz',
  //   maxItems: 23,
  // },
  // {
  //   category: 'Framing Stud',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Dimensional-Lumber-Framing-Studs/N-5yc1vZc562',
  //   maxItems: 16,
  // },
  // {
  //   category: 'Blow in insulation',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Insulation-Blown-in-Insulation/N-5yc1vZbayp',
  //   maxItems: 4,
  // },
  // {
  //   category: 'Mineral wool insulation',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Insulation-Mineral-Wool-Insulation/N-5yc1vZboco',
  //   maxItems: 9,
  // },
  // {
  //   category: 'Timber 2',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Pressure-Treated-Lumber/N-5yc1vZc3sr',
  //   maxItems: 88,
  // },
  // {
  //   category: 'Fiberglass',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Insulation-Fiberglass-Insulation/N-5yc1vZbay7',
  //   maxItems: 90,
  // },
  // {
  //   category: 'Foam Board insulation',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Insulation-Foam-Board-Insulation/N-5yc1vZbaxx',
  //   maxItems: 24,
  // },
  // {
  //   category: 'Fasteners',
  //   link: 'https://www.homedepot.com/b/Hardware-Fasteners-Screws/N-5yc1vZc2b0',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Concrete Mix',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Concrete-Cement-Masonry-Concrete-Mix/N-5yc1vZcdpt',
  //   maxItems: 17,
  // },
  // {
  //   category: 'Mortar Mix',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Concrete-Cement-Masonry-Mortar-Mix/N-5yc1vZcdq4',
  //   maxItems: 11,
  // },
  // {
  //   category: 'Stucco Mix',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Concrete-Cement-Masonry-Stucco-Stucco-Mix/N-5yc1vZ2fkp5ot',
  //   maxItems: 24,
  // },
  // {
  //   category: 'Concrete Tools',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Concrete-Cement-Masonry-Concrete-Tools/N-5yc1vZarh8',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Ventilations',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Ventilation/N-5yc1vZc4mr?catStyle=ShowProducts&sortorder=desc&sortby=topsellers',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Gutters',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Gutter-Systems/N-5yc1vZardx',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Vinyl Fencing ',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Fencing-Gates-Vinyl-Fencing/N-5yc1vZc3mq',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Compopsite Fencing',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Fencing-Gates-Composite-Fencing/N-5yc1vZc5ug',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Metal fencing',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Fencing-Gates-Metal-Fencing/N-5yc1vZc3le',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Composite Decking Boards',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Boards-Composite-Decking-Boards/N-5yc1vZc5mb',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Wood Decking Board',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Boards-Wood-Decking-Boards/N-5yc1vZc80m',
  //   maxItems: 69,
  // },
  // {
  //   category: 'PVC Deck Board',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Boards-PVC-Deck-Boards/N-5yc1vZc5mu',
  //   maxItems: 24,
  // },
  // {
  //   category: 'Wood Siding',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Siding-Wood-Siding/N-5yc1vZc8aj',
  //   maxItems: 38,
  // },
  // {
  //   category: 'Vinyl Siding ',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Siding-Vinyl-Siding/N-5yc1vZc8a6',
  //   maxItems: 81,
  // },
  // {
  //   category: 'Composite Siding ',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Siding-Composite-Siding/N-5yc1vZc8ik',
  //   maxItems: 97,
  // },
  // {
  //   category: 'Stone Venner',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Siding-Stone-Veneer-Siding/N-5yc1vZc85v',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Deck Railing System',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Railings-Deck-Railing-Systems/N-5yc1vZc5px',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Fiber Siding',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Siding-Fiber-Cement-Siding/N-5yc1vZc8af',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Siding Trim',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Siding-Siding-Trim/N-5yc1vZaq0n',
  //   maxItems: 189,
  // },
  // {
  //   category: 'Siding Accessories',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Siding-Siding-Accessories/N-5yc1vZ2fkp9fi',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Moulding',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Moulding-Millwork-Moulding/N-5yc1vZara1',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Baseboards',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Moulding-Millwork-Moulding-Baseboard/N-5yc1vZcbjp',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Stair Parts',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Moulding-Millwork-Stair-Parts/N-5yc1vZbcro',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Stair Railings',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Moulding-Millwork-Stair-Parts-Stair-Railings/N-5yc1vZbcrw',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Ceiling Tiles',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Ceilings-Ceiling-Tiles/N-5yc1vZc58l',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Ceiling Grids',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Ceilings-Ceiling-Grids/N-5yc1vZc596',
  //   maxItems: 48,
  // },
  // {
  //   category: 'Ceiling Light Panels & Louvers ',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Ceilings-Ceiling-Light-Panels/N-5yc1vZc58p',
  //   maxItems: 26,
  // },
  // {
  //   category: 'Ceiling Tile tolls',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Ceilings-Ceiling-Tile-Tools/N-5yc1vZc59f',
  //   maxItems: 47,
  // },
  // {
  //   category: 'Plexiglass',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Glass-Plastic-Sheets-Plexiglass/N-5yc1vZc9x2',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Corrugated Plastic Sheets',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Glass-Plastic-Sheets-Corrugated-Plastic-Sheets/N-5yc1vZcbtu',
  //   maxItems: 65,
  // },
  // {
  //   category: 'Polycarbonate',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Glass-Plastic-Sheets-Polycarbonate-Sheets/N-5yc1vZc9ws',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Hdpe Sheets',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Glass-Plastic-Sheets-HDPE-Sheets/N-5yc1vZ2fkpddj',
  //   maxItems: 3,
  // },
  // {
  //   category: 'Glass plastic Rubber Sheets ',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Glass-Plastic-Sheets-Rubber-Sheets/N-5yc1vZcj87',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Deck Railings ',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Railings/N-5yc1vZc5i7',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Wall Paneling',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Boards-Planks-Panels-Wall-Paneling/N-5yc1vZbqp3',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Hardwood Plywood',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Plywood-Hardwood-Plywood/N-5yc1vZc7r1',
  //   maxItems: 12,
  // },
  // {
  //   category: 'Sheathing Plywood',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Plywood-Sheathing-Plywood/N-5yc1vZc7q5',
  //   maxItems: 17,
  // },
  // {
  //   category: 'MDF',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Plywood-MDF/N-5yc1vZbtn1',
  //   maxItems: 5,
  // },
  // {
  //   category: 'Sanded Plywood',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Plywood-Sanded-Plywood/N-5yc1vZc7qk',
  //   maxItems: 10,
  // },
  // {
  //   category: 'Roof Shingles',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Roofing-Roof-Shingles/N-5yc1vZc5rb',
  //   maxItems: 19,
  // },
  // {
  //   category: 'Roof Panels',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Roofing-Roof-Panels/N-5yc1vZaq4r',
  //   maxItems: 70,
  // },
  // {
  //   category: 'Roof Flashing',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Roofing-Roof-Flashing-Roll-Flashing/N-5yc1vZas6d',
  //   maxItems: 37,
  // },
  // {
  //   category: 'Cement Board',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Drywall-Cement-Boards/N-5yc1vZcb0f',
  //   maxItems: 11,
  // },
  // {
  //   category: 'Corner Bead',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Drywall-Drywall-Corner-Bead/N-5yc1vZc7qn',
  //   maxItems: 67,
  // },
  // {
  //   category: 'Drywall Tools',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Drywall-Drywall-Tools/N-5yc1vZaro4',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Drywall Repair',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Drywall-Drywall-Repair-Tools/N-5yc1vZc7r0',
  //   maxItems: 56,
  // },
];

const crawl: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'home-depot-crawl',

  task: [
    async () => {
      const BATCH_SIZE = 5;
      const PAGE_SIZE = 24;

      const http = new HttpImplementation();
      for (const row of CATEGORIES) {
        const { category, link, maxItems } = row;
        const maxPages = maxItems ? Math.ceil(maxItems / PAGE_SIZE) : undefined;
        for (const pageIndex of range(32, (maxPages ?? 6) + 30)) {
          for (const start of range(0, Math.ceil(PAGE_SIZE / BATCH_SIZE))) {
            console.warn(`@@@ ${category} ${pageIndex} ${start}`);
            try {
              void http
                .get({
                  params: {
                    category,
                    link: `${link}?sortby=topsellers&sororder=desc`,
                    maxItems,
                    pageIndex,
                    start: start * BATCH_SIZE,
                  },
                  url: 'https://zxe9mbv4ve.execute-api.us-east-1.amazonaws.com/api/crawl',
                  // url: 'https://localhost:5001/api/crawl',
                })
                .catch((e) => {});
              await sleep(30000);
            } catch (e) {}
          }
        }
      }
    },
  ],
};

export default crawl;
