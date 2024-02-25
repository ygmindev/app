import { createLambdaHandler } from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler';
import { LAMBDA_PLUGIN } from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler.constants';
import { slug } from '@lib/shared/core/utils/slug/slug';
import { withScreen } from '@lib/shared/crawling/utils/withScreen/withScreen';
import { SELECTOR_TYPE } from '@lib/shared/crawling/utils/withScreen/withScreen.constants';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';
import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import range from 'lodash/range';
import toNumber from 'lodash/toNumber';
import trim from 'lodash/trim';
import uniq from 'lodash/uniq';

export const main = createLambdaHandler({
  handler: async ({ body, context }) => {
    console.warn(body);

    const ELEMENT_TIMEOUT = 5000;

    await withScreen(async (screen) => {
      let result: Array<Record<string, string | number>> = [];

      const maxPages = 1;
      const batchSize = 1;

      const categories: Array<{
        category: string;
        link: string;
        maxItems?: number;
      }> = [
        // [
        //   'https://www.homedepot.com/b/Lumber-Composites-Plywood-Sheathing-Plywood/N-5yc1vZc7q5?sortorder=desc&sortby=topsellers',
        //   '',
        // ],
        // [
        //   'https://www.homedepot.com/b/Lumber-Composites-Plywood-Hardwood-Plywood/N-5yc1vZc7r1?sortorder=desc&sortby=topsellers',
        //   '',
        // ],
        // [
        //   'https://www.homedepot.com/b/Lumber-Composites-Plywood-Oriented-Strand-Board-OSB/N-5yc1vZbqpq?sortorder=desc&sortby=topsellers',
        //   '',
        // ],
        // [
        //   'https://www.homedepot.com/b/Lumber-Composites-Timber/N-5yc1vZbym5?sortorder=desc&sortby=topsellers',
        //   'Timber',
        // ],
        // [
        //   'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Boards-Wood-Decking-Boards/Pressure-Treated/N-5yc1vZc80mZ1z0n5mi?sortorder=desc&sortby=topsellers',
        //   '',
        // ],
        // [
        //   'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Stairs-Outdoor-Stair-Stringers/N-5yc1vZbqlk?sortorder=desc&sortby=topsellers',
        //   'Stringers',
        // ],
        // [
        //   'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Railings-Balusters-Spindles/Pressure-Treated/N-5yc1vZc5q0Z1z0n5mi?sortorder=desc&sortby=topsellers',
        //   '',
        // ],
        // [
        //   'https://www.homedepot.com/b/Lumber-Composites-Pressure-Treated-Lumber/2-in-x-4-in/N-5yc1vZc3srZ1z0n4we?sortorder=desc&sortby=topsellers',
        //   '',
        // ],
        // [
        //   'https://www.homedepot.com/b/Lumber-Composites-Pressure-Treated-Lumber/2-in-x-6-in/N-5yc1vZc3srZ1z0n4w1?sortorder=desc&sortby=topsellers',
        //   '',
        // ],
        // [
        //   'https://www.homedepot.com/b/Lumber-Composites-Pressure-Treated-Lumber/2-in-x-10-in/N-5yc1vZc3srZ1z0n4uq?sortorder=desc&sortby=topsellers',
        //   '',
        // ],
        // [
        //   'https://www.homedepot.com/b/Lumber-Composites-Timber/4-in/6-in/N-5yc1vZ2fkp9hkZ1z1rkokZ1z1sonl?sortorder=desc&sortby=topsellers',
        //   '',
        // ],
        // [
        //   'https://www.homedepot.com/b/Lumber-Composites-Plywood-Project-Panels/N-5yc1vZc7hm?sortorder=desc&sortby=topsellers',
        //   '',
        // ],
        // [
        //   'https://www.homedepot.com/b/Lumber-Composites-Pressure-Treated-Lumber/2-in-x-10-in/2-in-x-6-in/2-in-x-8-in/N-5yc1vZc3srZ1z0n4uqZ1z0n4w1Z1z0n4w4?NCNI-5&sortorder=desc&sortby=topsellers',
        //   'Joist',
        // ],
        // [
        //   'https://www.homedepot.com/b/Paint/N-5yc1vZar2d?catStyle=ShowProducts&sortorder=desc&sortby=topsellers',
        //   '',
        // ],
        // [
        //   'https://www.homedepot.com/b/Tools/N-5yc1vZc1xy?catStyle=ShowProducts&sortorder=desc&sortby=topsellers',
        //   '',
        // ],
        // [
        //   'https://www.homedepot.com/b/Paint-Paint-Supplies-Tape/N-5yc1vZc5dk?sortorder=desc&sortby=topsellers',
        //   '',
        // ],
        // [
        //   'https://www.homedepot.com/b/Flooring/N-5yc1vZaq7r?catStyle=ShowProducts&sortorder=desc&sortby=topsellers',
        //   '',
        // ],
        // [
        //   'https://www.homedepot.com/b/Lumber-Composites-Boards-Planks-Panels/N-5yc1vZ1z18h41?sortorder=desc&sortby=topsellers',
        //   '',
        // ],
        // [
        //   'https://www.homedepot.com/b/Hardware-Fasteners/N-5yc1vZc255?catStyle=ShowProducts&sortorder=desc&sortby=topsellers',
        //   '',
        // ],
        // [
        //   'https://www.homedepot.com/b/Lumber-Composites-Fencing-Gates/N-5yc1vZbrk7?sortorder=desc&sortby=topsellers',
        //   '',
        // ],
        // [
        //   'https://www.homedepot.com/b/Building-Materials-Building-Hardware/N-5yc1vZaqzs?sortorder=desc&sortby=topsellers',
        //   '',
        // ],
        // [
        //   'https://www.homedepot.com/b/Doors-Windows-Exterior-Doors-Front-Doors/N-5yc1vZar90?sortorder=desc&sortby=topsellers',
        //   '',
        // ],
        // [
        //   'https://www.homedepot.com/b/Doors-Windows-Exterior-Doors-Patio-Doors/N-5yc1vZarqn?sortorder=desc&sortby=topsellers',
        //   '',
        // ],
        // [
        //   'https://www.homedepot.com/b/Doors-Windows-Interior-Doors-Prehung-Doors/N-5yc1vZc5ij?sortorder=desc&sortby=topsellers',
        //   '',
        // ],
        // [
        //   'https://www.homedepot.com/b/Doors-Windows-Interior-Doors-Slab-Doors/N-5yc1vZc5ie?sortorder=desc&sortby=topsellers',
        //   '',
        // ],
        // [
        //   'https://www.homedepot.com/b/Doors-Windows-Interior-Doors/N-5yc1vZc5io?catStyle=ShowProducts&sortorder=desc&sortby=topsellers',
        //   '',
        // ],
        // [
        //   'https://www.homedepot.com/b/Doors-Windows-Exterior-Doors/N-5yc1vZas82?catStyle=ShowProducts&sortorder=desc&sortby=topsellers',
        //   '',
        // ],
        // [
        //   'https://www.homedepot.com/b/Hardware-Fasteners/N-5yc1vZc255?catStyle=ShowProducts&sortorder=desc&sortby=topsellers',
        //   '',
        // ],
        // [
        //   'https://www.homedepot.com/b/Building-Materials-Drywall-Joint-Compound/N-5yc1vZard1?sortorder=desc&sortby=topsellers',
        //   '',
        // ],
        // [
        //   'https://www.homedepot.com/b/Building-Materials/N-5yc1vZaqnsZbwo5l?NCNI-5&sortorder=desc&sortby=topsellers',
        //   '',
        // ],
        // [
        //   'https://www.homedepot.com/b/Lumber-Composites-Plywood-Hardwood-Plywood/N-5yc1vZc7r1?sortorder=desc&sortby=topsellers',
        //   'Hardwood Plywood',
        // ],
        // [
        //   'https://www.homedepot.com/b/Lumber-Composites-Plywood-Sheathing-Plywood/N-5yc1vZc7q5?sortorder=desc&sortby=topsellers',
        //   'Sheathing Plywood',
        // ],
        // [
        //   'https://www.homedepot.com/b/Lumber-Composites-Plywood-MDF/N-5yc1vZbtn1?sortorder=desc&sortby=topsellers',
        //   'MDF',
        // ],
        // [
        //   'https://www.homedepot.com/b/Lumber-Composites-Plywood-Sanded-Plywood/N-5yc1vZc7qk?sortorder=desc&sortby=topsellers',
        //   'Sanded Plywood',
        // ],
        // [
        //   'https://www.homedepot.com/b/Building-Materials-Roofing-Roof-Shingles/N-5yc1vZc5rb?sortorder=desc&sortby=topsellers',
        //   'Roof Shingles',
        // ],
        // [
        //   'https://www.homedepot.com/b/Building-Materials-Roofing-Roof-Panels/N-5yc1vZaq4r?sortorder=desc&sortby=topsellers',
        //   'Roof Panels',
        // ],
        // [
        //   'https://www.homedepot.com/b/Building-Materials-Roofing-Roof-Flashing-Roll-Flashing/N-5yc1vZas6d?sortorder=desc&sortby=topsellers',
        //   'Roof Flashing',
        // ],
        // [
        //   'https://www.homedepot.com/b/Building-Materials-Drywall-Cement-Boards/N-5yc1vZcb0f?sortorder=desc&sortby=topsellers',
        //   'Cement Board',
        // ],
        // [
        //   'https://www.homedepot.com/b/Building-Materials-Drywall-Drywall-Corner-Bead/N-5yc1vZc7qn?sortorder=desc&sortby=topsellers',
        //   'Corner Bead',
        // ],
        // [
        //   'https://www.homedepot.com/b/Building-Materials-Drywall-Drywall-Tools/N-5yc1vZaro4?sortorder=desc&sortby=topsellers',
        //   'Drywall Tools',
        // ],
        // [
        //   'https://www.homedepot.com/b/Building-Materials-Drywall-Drywall-Repair-Tools/N-5yc1vZc7r0?sortorder=desc&sortby=topsellers',
        //   'Drywall Repair',
        // ],
        //
        // ROUND 2
        // [
        //   'https://www.homedepot.com/b/Lumber-Composites-Trusses/N-5yc1vZbtmz?sortorder=desc&sortby=topsellers',
        //   'Truss',
        // ],
        // [
        //   'https://www.homedepot.com/b/Lumber-Composites-Pressure-Treated-Lumber/N-5yc1vZc3sr?sortorder=desc&sortby=topsellers',
        //   'Timber 2',
        // ],
        // [
        //   'https://www.homedepot.com/b/Lumber-Composites-Dimensional-Lumber-Framing-Studs/N-5yc1vZc562?sortorder=desc&sortby=topsellers',
        //   'Framing Stud',
        // ],
        // [
        //   'https://www.homedepot.com/b/Building-Materials-Ventilation-Roofing-Attic-Ventilation/N-5yc1vZc663?sortorder=desc&sortby=topsellers',
        //   'Roofing & Attic',
        // ],
        // [
        //   'https://www.homedepot.com/b/Building-Materials-Insulation-Blown-in-Insulation/N-5yc1vZbayp?sortorder=desc&sortby=topsellers',
        //   'Blow in insulation',
        // ],
        // [
        //   'https://www.homedepot.com/b/Building-Materials-Insulation-Mineral-Wool-Insulation/N-5yc1vZboco?sortorder=desc&sortby=topsellers',
        //   'Mineral wool insulation',
        // ],
        // [
        //   'https://www.homedepot.com/b/Building-Materials-Insulation-Fiberglass-Insulation/N-5yc1vZbay7?sortorder=desc&sortby=topsellers',
        //   'Fiberglass',
        // ],
        // [
        //   'https://www.homedepot.com/b/Building-Materials-Insulation-Foam-Board-Insulation/N-5yc1vZbaxx?sortorder=desc&sortby=topsellers',
        //   'Foam Board insulation',
        // ],
        // [
        //   'https://www.homedepot.com/b/Hardware-Fasteners-Screws/N-5yc1vZc2b0?sortorder=desc&sortby=topsellers',
        //   'Fasteners',
        // ],
        // [
        //   'https://www.homedepot.com/b/Building-Materials-Concrete-Cement-Masonry-Concrete-Mix/N-5yc1vZcdpt?sortorder=desc&sortby=topsellers',
        //   'Concrete Mix',
        // ],

        // [
        //   'https://www.homedepot.com/b/Building-Materials-Concrete-Cement-Masonry-Mortar-Mix/N-5yc1vZcdq4?sortorder=desc&sortby=topsellers',
        //   'Mortar Mix',
        // ],
        // [
        //   'https://www.homedepot.com/b/Building-Materials-Concrete-Cement-Masonry-Stucco-Stucco-Mix/N-5yc1vZ2fkp5ot?sortorder=desc&sortby=topsellers',
        //   'Stucco Mix',
        // ],
        // [
        //   'https://www.homedepot.com/b/Building-Materials-Concrete-Cement-Masonry-Concrete-Tools/N-5yc1vZarh8?sortorder=desc&sortby=topsellers',
        //   'Concrete Tools',
        // ],
        // [
        //   'https://www.homedepot.com/b/Building-Materials-Ventilation/N-5yc1vZc4mr?catStyle=ShowProducts&sortorder=desc&sortby=topsellers',
        //   'Ventilations',
        // ],
        // [
        //   'https://www.homedepot.com/b/Building-Materials-Gutter-Systems/N-5yc1vZardx?sortorder=desc&sortby=topsellers',
        //   'Gutters',
        // ],
        // [
        //   'https://www.homedepot.com/b/Lumber-Composites-Fencing-Gates-Vinyl-Fencing/N-5yc1vZc3mq?sortorder=desc&sortby=topsellers',
        //   'Vinyl Fencing ',
        // ],
        // [
        //   'https://www.homedepot.com/b/Lumber-Composites-Fencing-Gates-Composite-Fencing/N-5yc1vZc5ug?sortorder=desc&sortby=topsellers',
        //   'Compopsite Fencing',
        // ],
        // [
        //   'https://www.homedepot.com/b/Lumber-Composites-Fencing-Gates-Metal-Fencing/N-5yc1vZc3le?sortorder=desc&sortby=topsellers',
        //   'Metal fencing',
        // ],
        // [
        //   'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Boards-Composite-Decking-Boards/N-5yc1vZc5mb?sortorder=desc&sortby=topsellers',
        //   'Composite Decking Boards',
        // ],
        // [
        //   'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Boards-Wood-Decking-Boards/N-5yc1vZc80m?sortorder=desc&sortby=topsellers',
        //   'Wood Decking Board',
        // ],
        // [
        //   'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Boards-PVC-Deck-Boards/N-5yc1vZc5mu?sortorder=desc&sortby=topsellers',
        //   'PVC Deck Board',
        // ],

        // [
        //   'https://www.homedepot.com/b/Building-Materials-Siding-Wood-Siding/N-5yc1vZc8aj?sortorder=desc&sortby=topsellers',
        //   'Wood Siding',
        // ],
        // [
        //   'https://www.homedepot.com/b/Building-Materials-Siding-Vinyl-Siding/N-5yc1vZc8a6?sortorder=desc&sortby=topsellers',
        //   'Vinyl Siding ',
        // ],
        // [
        //   'https://www.homedepot.com/b/Building-Materials-Siding-Composite-Siding/N-5yc1vZc8ik?sortorder=desc&sortby=topsellers',
        //   'Composite Siding ',
        // ],
        // [
        //   'https://www.homedepot.com/b/Building-Materials-Siding-Stone-Veneer-Siding/N-5yc1vZc85v?sortorder=desc&sortby=topsellers',
        //   'Stone Venner',
        // ],
        // [
        //   'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Railings-Deck-Railing-Systems/N-5yc1vZc5px?sortorder=desc&sortby=topsellers',
        //   'Deck Railing System',
        // ],
        // [
        //   'https://www.homedepot.com/b/Building-Materials-Siding-Fiber-Cement-Siding/N-5yc1vZc8af?sortorder=desc&sortby=topsellers',
        //   'Fiber Siding',
        // ],
        // [
        //   'https://www.homedepot.com/b/Building-Materials-Siding-Siding-Trim/N-5yc1vZaq0n?sortorder=desc&sortby=topsellers',
        //   'Siding Trim',
        // ],
        {
          category: 'Siding Accessories ',
          link: 'https://www.homedepot.com/b/Building-Materials-Siding-Siding-Accessories/N-5yc1vZ2fkp9fi?sortorder=desc&sortby=topsellers',
          maxItems: 2,
        },
        // {
        //   category: 'Moulding',
        //   link: 'https://www.homedepot.com/b/Building-Materials-Moulding-Millwork-Moulding/N-5yc1vZara1?sortorder=desc&sortby=topsellers',
        // },
        // {
        //   category: 'Baseboards',
        //   link: 'https://www.homedepot.com/b/Building-Materials-Moulding-Millwork-Moulding-Baseboard/N-5yc1vZcbjp?sortorder=desc&sortby=topsellers',
        // },
        // {
        //   category: 'Stair Parts',
        //   link: 'https://www.homedepot.com/b/Building-Materials-Moulding-Millwork-Stair-Parts/N-5yc1vZbcro?sortorder=desc&sortby=topsellers',
        // },
        // {
        //   category: 'Stair Railings',
        //   link: 'https://www.homedepot.com/b/Building-Materials-Moulding-Millwork-Stair-Parts-Stair-Railings/N-5yc1vZbcrw?sortorder=desc&sortby=topsellers',
        // },
        // {
        //   category: 'Ceiling Tiles',
        //   link: 'https://www.homedepot.com/b/Building-Materials-Ceilings-Ceiling-Tiles/N-5yc1vZc58l?sortorder=desc&sortby=topsellers',
        // },
        // {
        //   category: 'Ceiling Grids',
        //   link: 'https://www.homedepot.com/b/Building-Materials-Ceilings-Ceiling-Grids/N-5yc1vZc596?sortorder=desc&sortby=topsellers',
        // },
        // {
        //   category: 'Ceiling Light Panels & Louvers ',
        //   link: 'https://www.homedepot.com/b/Building-Materials-Ceilings-Ceiling-Light-Panels/N-5yc1vZc58p?sortorder=desc&sortby=topsellers',
        // },
        // {
        //   category: 'Ceiling Tile tolls',
        //   link: 'https://www.homedepot.com/b/Building-Materials-Ceilings-Ceiling-Tile-Tools/N-5yc1vZc59f?sortorder=desc&sortby=topsellers',
        // },
        // {
        //   category: 'Plexiglass',
        //   link: 'https://www.homedepot.com/b/Building-Materials-Glass-Plastic-Sheets-Plexiglass/N-5yc1vZc9x2?sortorder=desc&sortby=topsellers',
        // },
        // {
        //   category: 'Corrugated Plastic Sheets',
        //   link: 'https://www.homedepot.com/b/Building-Materials-Glass-Plastic-Sheets-Corrugated-Plastic-Sheets/N-5yc1vZcbtu?sortorder=desc&sortby=topsellers',
        // },
        // {
        //   category: 'Polycarbonate',
        //   link: 'https://www.homedepot.com/b/Building-Materials-Glass-Plastic-Sheets-Polycarbonate-Sheets/N-5yc1vZc9ws?sortorder=desc&sortby=topsellers',
        // },
        // {
        //   category: 'Hdpe Sheets',
        //   link: 'https://www.homedepot.com/b/Building-Materials-Glass-Plastic-Sheets-HDPE-Sheets/N-5yc1vZ2fkpddj?sortorder=desc&sortby=topsellers',
        // },
        // {
        //   category: 'Glass plastic Rubber Sheets ',
        //   link: 'https://www.homedepot.com/b/Building-Materials-Glass-Plastic-Sheets-Rubber-Sheets/N-5yc1vZcj87?sortorder=desc&sortby=topsellers',
        // },
        // {
        //   category: 'Deck Railings ',
        //   link: 'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Railings/N-5yc1vZc5i7?sortorder=desc&sortby=topsellers',
        // },
        // {
        //   category: 'Wall Paneling',
        //   link: 'https://www.homedepot.com/b/Lumber-Composites-Boards-Planks-Panels-Wall-Paneling/N-5yc1vZbqp3?sortorder=desc&sortby=topsellers',
        // },
      ];

      const columns = [
        'Extra',
        'Tags',
        'Vendor',
        'Title',
        'Handle',
        'Body (HTML)',
        'Cost per Item',
        'Length',
        'Length Unit',
        'Width',
        'Width Unit',
        'Thickness',
        'Thickness Unit',
        'Variant Grams',
        'URL',
        'Image Src',
        'Image Position',
        'Variant Price',
        'Count',
      ];

      const auth = new JWT({
        email: process.env.SERVER_GOOGLE_EMAIL,
        key: process.env.SERVER_GOOGLE_PRIVATE_KEY,
        scopes: [
          'https://www.googleapis.com/auth/spreadsheets',
          'https://www.googleapis.com/auth/drive.file',
        ],
      });
      const doc = new GoogleSpreadsheet('1Y50rGvzXzPNcnDjm4xkJ1AnxKIYsKBaooeraCpankiw', auth);
      await doc.loadInfo();
      const [sheet] = doc.sheetsByIndex;

      for (const { category, link, maxItems } of categories) {
        const pageIndices = range(0, maxPages);
        for (const pageIndex of pageIndices) {
          try {
            let count = 1;
            if (maxItems && count >= maxItems) {
              break;
            }

            await screen.open(`${link}${pageIndex > 0 ? `&Nao=${pageIndex * 24}` : ''}`);

            await screen
              .find({ value: '.results-layout__toggle-grid' }, { timeout: ELEMENT_TIMEOUT })
              .then((h) => h?.press());

            const urls = await Promise.all(
              await screen
                .findAll({ value: '.browse-search__pod' })
                .then((handles) =>
                  handles?.map((h) => h.find({ value: '.product-image' }).then((h) => h?.url())),
                ),
            );

            const urlsF = [urls[0], urls[1]];

            for (const url of urlsF) {
              if (maxItems && count >= maxItems) {
                break;
              }

              try {
                if (url?.startsWith('https://www.homedepot.com')) {
                  const row: Record<string, unknown> = {};
                  const crawls: Array<() => Promise<void>> = [];

                  columns.forEach((column) => (row[column] = ''));

                  await screen.open(url);

                  const accordions = await screen.findAll({
                    value: '.accordion-title-container',
                  });
                  for (const accordion of accordions) {
                    try {
                      await accordion.press();
                    } catch (e) {}
                  }

                  row.Extra = category;

                  // category
                  crawls.push(async () => {
                    let tags = [];
                    const categories = await screen
                      .findAll({ value: '.breadcrumb__item a' })
                      .then((handles) => handles.map((h) => h?.text()));
                    for (const category of categories) {
                      const categoryF = await category;
                      categoryF && categoryF !== 'Home' && tags.push(categoryF);
                    }
                    tags = uniq(tags);
                    row.Tags = tags ? tags.join(',') : '';
                  });

                  // brand
                  crawls.push(async () => {
                    row.Vendor =
                      (await screen.find({ value: '.brand' }).then((h) => h?.text())) ?? '';
                  });

                  // title
                  crawls.push(async () => {
                    row.Title =
                      (await screen
                        .find({
                          key: 'data-component',
                          type: SELECTOR_TYPE.DATA,
                          value: 'ProductDetailsTitle',
                        })
                        .then((h) => h?.find({ value: 'h1' }).then((h) => h?.text()))) ?? '';
                    row.Title && (row.Handle = slug(row.Title as string));
                  });

                  // description
                  crawls.push(async () => {
                    row['Body (HTML)'] = await screen
                      .find({
                        key: 'data-testid',
                        type: SELECTOR_TYPE.DATA,
                        value: 'desktop-content',
                      })
                      .then((h) => h?.find({ value: '.sui-flex-col' }))
                      .then((h) => h?.find({ value: '.sui-flex-col' }))
                      .then((h) => h?.content());

                    row['Body (HTML)'] =
                      row['Body (HTML)'] ??
                      (await screen
                        .find({ value: '.desktop-content-wrapper__main-description' })
                        .then((h) => h?.content()));
                  });

                  // price
                  crawls.push(async () => {
                    const priceContainer = await screen.find({
                      value: '.price-format__main-price',
                    });
                    if (priceContainer) {
                      const spans = await priceContainer.findAll({
                        value: 'span',
                      });
                      const dollar = await spans[1]?.text();
                      const cent = await spans[3]?.text();
                      row['Cost per Item'] =
                        dollar && cent ? toNumber(`${dollar ?? 0}.${cent ?? 0}`) : '';
                      row['Cost per Item'] &&
                        (row['Variant Price'] = ((row['Cost per Item'] as number) * 1.075).toFixed(
                          2,
                        ));
                    }
                  });

                  const specificationsContainer = await screen.find(
                    { value: '.specifications' },
                    { timeout: ELEMENT_TIMEOUT },
                  );
                  if (specificationsContainer) {
                    // dimensions
                    crawls.push(async () => {
                      const v = await specificationsContainer
                        .find(
                          { type: SELECTOR_TYPE.TEXT, value: 'ength (ft' },
                          { timeout: ELEMENT_TIMEOUT },
                        )
                        .then((h) => h?.next())
                        .then((h) => h?.text())
                        .then((h) => h?.replace(' ft.', '').replace(' ft', ''))
                        .then((h) => h && toNumber(trim(eval(h) as string, '0')));
                      if (v) {
                        row.Length = v;
                        row['Length Unit'] = 'ft';
                      }
                    });

                    crawls.push(async () => {
                      const v = await specificationsContainer
                        .find(
                          { type: SELECTOR_TYPE.TEXT, value: 'ength (in' },
                          { timeout: ELEMENT_TIMEOUT },
                        )
                        .then((h) => h?.next())
                        .then((h) => h?.text())
                        .then((h) => h?.replace(' in.', '').replace(' in', ''))
                        .then((h) => h && toNumber(trim(eval(h) as string, '0')));
                      if (v) {
                        row.Length = v;
                        row['Length Unit'] = 'in';
                      }
                    });

                    crawls.push(async () => {
                      const v = await specificationsContainer
                        .find(
                          { type: SELECTOR_TYPE.TEXT, value: 'idth (ft' },
                          { timeout: ELEMENT_TIMEOUT },
                        )
                        .then((h) => h?.next())
                        .then((h) => h?.text())
                        .then((h) => h?.replace(' ft.', '').replace(' ft', ''))
                        .then((h) => h && toNumber(trim(eval(h) as string, '0')));
                      if (v) {
                        row.Width = v;
                        row['Width Unit'] = 'ft';
                      }
                    });

                    crawls.push(async () => {
                      const v = await specificationsContainer
                        .find(
                          { type: SELECTOR_TYPE.TEXT, value: 'idth (in' },
                          { timeout: ELEMENT_TIMEOUT },
                        )
                        .then((h) => h?.next())
                        .then((h) => h?.text())
                        .then((h) => h?.replace(' in.', '').replace(' in', ''))
                        .then((h) => h && toNumber(trim(eval(h) as string, '0')));
                      if (v) {
                        row.Width = v;
                        row['Width Unit'] = 'in';
                      }
                    });

                    crawls.push(async () => {
                      const v = await specificationsContainer
                        .find(
                          { type: SELECTOR_TYPE.TEXT, value: 'hickness (ft' },
                          { timeout: ELEMENT_TIMEOUT },
                        )
                        .then((h) => h?.next())
                        .then((h) => h?.text())
                        .then((h) => h?.replace(' ft.', '').replace(' ft', ''))
                        .then((h) => h && toNumber(trim(eval(h) as string, '0')));
                      if (v) {
                        row.Thickness = v;
                        row['Thickness Unit'] = 'ft';
                      }
                    });

                    crawls.push(async () => {
                      const v = await specificationsContainer
                        .find(
                          { type: SELECTOR_TYPE.TEXT, value: 'hickness (in' },
                          { timeout: ELEMENT_TIMEOUT },
                        )
                        .then((h) => h?.next())
                        .then((h) => h?.text())
                        .then((h) => h?.replace(' in.', '').replace(' in', ''))
                        .then((h) => h && toNumber(trim(eval(h) as string, '0')));
                      if (v) {
                        row.Thickness = v;
                        row['Thickness Unit'] = 'in';
                      }
                    });

                    crawls.push(async () => {
                      const v = await specificationsContainer
                        .find(
                          { type: SELECTOR_TYPE.TEXT, value: 'eight (grams' },
                          { timeout: ELEMENT_TIMEOUT },
                        )
                        .then((h) => h?.next())
                        .then((h) => h?.text())
                        .then((h) => h?.replace(' grams', ''))
                        .then((h) => h && toNumber(trim(eval(h) as string, '0')));
                      if (v) {
                        row['Variant Grams'] = v;
                      }
                    });

                    crawls.push(async () => {
                      const v = await specificationsContainer
                        .find(
                          { type: SELECTOR_TYPE.TEXT, value: 'eight (lb' },
                          { timeout: ELEMENT_TIMEOUT },
                        )
                        .then((h) => h?.next())
                        .then((h) => h?.text())
                        .then((h) => h?.replace(' lb.', '').replace(' lb', ''))
                        .then((h) => h && toNumber(trim(eval(h) as string, '0')));
                      if (v) {
                        row['Variant Grams'] = (v * 453.6).toFixed(3);
                      }
                    });
                  }

                  // images
                  const thumbnails = await screen.findAll({ value: '.mediagallery__imgblock' });
                  crawls.push(async () => {
                    let i = 1;
                    for (const thumbnail of thumbnails) {
                      await thumbnail.press();
                      const src = await screen
                        .find({ value: '.mediagallery__mainimage' })
                        .then((h) => h?.find({ value: 'img' }))
                        .then((h) => h?.src());

                      if (src) {
                        row.URL = url;
                        row.Count = count;
                        const rowToAdd = i > 1 ? { Extra: row.Extra, Handle: row.Handle } : row;
                        rowToAdd['Image Src'] = src;
                        rowToAdd['Image Position'] = i;
                        result.push(rowToAdd as Record<string, string | number>);
                        i++;
                      }
                    }
                  });

                  await Promise.all(crawls.map((f) => f()));

                  if (result) {
                    // let headersAll = result.map((row) => Object.keys(row));
                    // headersAll = sortBy(headersAll, (v) => -1 * v.length);
                    // const [headers, ..._] = headersAll;
                    // resultF = [
                    //   headers,
                    //   ...result.map((row) => headers.map((h) => `${row[h] as string}`)),
                    // ];
                    // writeFile({
                    //   filename: fromWorking(filename),
                    //   value: csv(resultF),
                    // });
                    if (result.length > 0 && result.length % batchSize === 0) {
                      await sheet.addRows(result);
                      await sheet.saveUpdatedCells();
                      result = [];
                    }
                    count++;
                  }
                }
              } catch (e) {
                console.warn(e);
                continue;
              }
            }
            if (result.length > 0) {
              await sheet.addRows(result);
              await sheet.saveUpdatedCells();
              result = [];
            }
          } catch (e) {
            console.warn(e);
            continue;
          }
        }
      }
    });

    return {
      body: { message: 'success' },
      headers: { 'Access-Control-Allow-Origin': '*' },
      statusCode: HTTP_STATUS_CODE.SUCCESS,
    };
  },
  plugins: [LAMBDA_PLUGIN.AUTHENTICATION],
});
