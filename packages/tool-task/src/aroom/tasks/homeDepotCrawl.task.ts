import { HttpImplementation } from '@lib/backend/http/utils/HttpImplementation/HttpImplementation';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import range from 'lodash/range';

const CATEGORIES: Array<{
  category: string;
  link: string;
  maxItems?: number;
}> = [
  // [
  //   'https://www.homedepot.com/b/Lumber-Composites-Plywood-Sheathing-Plywood/N-5yc1vZc7q5',
  //   '',
  // ],
  // [
  //   'https://www.homedepot.com/b/Lumber-Composites-Plywood-Hardwood-Plywood/N-5yc1vZc7r1',
  //   '',
  // ],
  // [
  //   'https://www.homedepot.com/b/Lumber-Composites-Plywood-Oriented-Strand-Board-OSB/N-5yc1vZbqpq',
  //   '',
  // ],
  // [
  //   'https://www.homedepot.com/b/Lumber-Composites-Timber/N-5yc1vZbym5',
  //   'Timber',
  // ],
  // [
  //   'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Boards-Wood-Decking-Boards/Pressure-Treated/N-5yc1vZc80mZ1z0n5mi',
  //   '',
  // ],
  // [
  //   'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Stairs-Outdoor-Stair-Stringers/N-5yc1vZbqlk',
  //   'Stringers',
  // ],
  // [
  //   'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Railings-Balusters-Spindles/Pressure-Treated/N-5yc1vZc5q0Z1z0n5mi',
  //   '',
  // ],
  // [
  //   'https://www.homedepot.com/b/Lumber-Composites-Pressure-Treated-Lumber/2-in-x-4-in/N-5yc1vZc3srZ1z0n4we',
  //   '',
  // ],
  // [
  //   'https://www.homedepot.com/b/Lumber-Composites-Pressure-Treated-Lumber/2-in-x-6-in/N-5yc1vZc3srZ1z0n4w1',
  //   '',
  // ],
  // [
  //   'https://www.homedepot.com/b/Lumber-Composites-Pressure-Treated-Lumber/2-in-x-10-in/N-5yc1vZc3srZ1z0n4uq',
  //   '',
  // ],
  // [
  //   'https://www.homedepot.com/b/Lumber-Composites-Timber/4-in/6-in/N-5yc1vZ2fkp9hkZ1z1rkokZ1z1sonl',
  //   '',
  // ],
  // [
  //   'https://www.homedepot.com/b/Lumber-Composites-Plywood-Project-Panels/N-5yc1vZc7hm',
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
  //   'https://www.homedepot.com/b/Paint-Paint-Supplies-Tape/N-5yc1vZc5dk',
  //   '',
  // ],
  // [
  //   'https://www.homedepot.com/b/Flooring/N-5yc1vZaq7r?catStyle=ShowProducts&sortorder=desc&sortby=topsellers',
  //   '',
  // ],
  // [
  //   'https://www.homedepot.com/b/Lumber-Composites-Boards-Planks-Panels/N-5yc1vZ1z18h41',
  //   '',
  // ],
  // [
  //   'https://www.homedepot.com/b/Hardware-Fasteners/N-5yc1vZc255?catStyle=ShowProducts&sortorder=desc&sortby=topsellers',
  //   '',
  // ],
  // [
  //   'https://www.homedepot.com/b/Lumber-Composites-Fencing-Gates/N-5yc1vZbrk7',
  //   '',
  // ],
  // [
  //   'https://www.homedepot.com/b/Building-Materials-Building-Hardware/N-5yc1vZaqzs',
  //   '',
  // ],
  // [
  //   'https://www.homedepot.com/b/Doors-Windows-Exterior-Doors-Front-Doors/N-5yc1vZar90',
  //   '',
  // ],
  // [
  //   'https://www.homedepot.com/b/Doors-Windows-Exterior-Doors-Patio-Doors/N-5yc1vZarqn',
  //   '',
  // ],
  // [
  //   'https://www.homedepot.com/b/Doors-Windows-Interior-Doors-Prehung-Doors/N-5yc1vZc5ij',
  //   '',
  // ],
  // [
  //   'https://www.homedepot.com/b/Doors-Windows-Interior-Doors-Slab-Doors/N-5yc1vZc5ie',
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
  //   'https://www.homedepot.com/b/Building-Materials-Drywall-Joint-Compound/N-5yc1vZard1',
  //   '',
  // ],
  // [
  //   'https://www.homedepot.com/b/Building-Materials/N-5yc1vZaqnsZbwo5l?NCNI-5&sortorder=desc&sortby=topsellers',
  //   '',
  // ],
  // [
  //   'https://www.homedepot.com/b/Lumber-Composites-Plywood-Hardwood-Plywood/N-5yc1vZc7r1',
  //   'Hardwood Plywood',
  // ],
  // [
  //   'https://www.homedepot.com/b/Lumber-Composites-Plywood-Sheathing-Plywood/N-5yc1vZc7q5',
  //   'Sheathing Plywood',
  // ],
  // [
  //   'https://www.homedepot.com/b/Lumber-Composites-Plywood-MDF/N-5yc1vZbtn1',
  //   'MDF',
  // ],
  // [
  //   'https://www.homedepot.com/b/Lumber-Composites-Plywood-Sanded-Plywood/N-5yc1vZc7qk',
  //   'Sanded Plywood',
  // ],
  // [
  //   'https://www.homedepot.com/b/Building-Materials-Roofing-Roof-Shingles/N-5yc1vZc5rb',
  //   'Roof Shingles',
  // ],
  // [
  //   'https://www.homedepot.com/b/Building-Materials-Roofing-Roof-Panels/N-5yc1vZaq4r',
  //   'Roof Panels',
  // ],
  // [
  //   'https://www.homedepot.com/b/Building-Materials-Roofing-Roof-Flashing-Roll-Flashing/N-5yc1vZas6d',
  //   'Roof Flashing',
  // ],
  // [
  //   'https://www.homedepot.com/b/Building-Materials-Drywall-Cement-Boards/N-5yc1vZcb0f',
  //   'Cement Board',
  // ],
  // [
  //   'https://www.homedepot.com/b/Building-Materials-Drywall-Drywall-Corner-Bead/N-5yc1vZc7qn',
  //   'Corner Bead',
  // ],
  // [
  //   'https://www.homedepot.com/b/Building-Materials-Drywall-Drywall-Tools/N-5yc1vZaro4',
  //   'Drywall Tools',
  // ],
  // [
  //   'https://www.homedepot.com/b/Building-Materials-Drywall-Drywall-Repair-Tools/N-5yc1vZc7r0',
  //   'Drywall Repair',
  // ],
  //
  // ROUND 2
  // [
  //   'https://www.homedepot.com/b/Lumber-Composites-Trusses/N-5yc1vZbtmz',
  //   'Truss',
  // ],
  // [
  //   'https://www.homedepot.com/b/Lumber-Composites-Pressure-Treated-Lumber/N-5yc1vZc3sr',
  //   'Timber 2',
  // ],
  // [
  //   'https://www.homedepot.com/b/Lumber-Composites-Dimensional-Lumber-Framing-Studs/N-5yc1vZc562',
  //   'Framing Stud',
  // ],
  // [
  //   'https://www.homedepot.com/b/Building-Materials-Ventilation-Roofing-Attic-Ventilation/N-5yc1vZc663',
  //   'Roofing & Attic',
  // ],
  // [
  //   'https://www.homedepot.com/b/Building-Materials-Insulation-Blown-in-Insulation/N-5yc1vZbayp',
  //   'Blow in insulation',
  // ],
  // [
  //   'https://www.homedepot.com/b/Building-Materials-Insulation-Mineral-Wool-Insulation/N-5yc1vZboco',
  //   'Mineral wool insulation',
  // ],
  // [
  //   'https://www.homedepot.com/b/Building-Materials-Insulation-Fiberglass-Insulation/N-5yc1vZbay7',
  //   'Fiberglass',
  // ],
  // [
  //   'https://www.homedepot.com/b/Building-Materials-Insulation-Foam-Board-Insulation/N-5yc1vZbaxx',
  //   'Foam Board insulation',
  // ],
  // [
  //   'https://www.homedepot.com/b/Hardware-Fasteners-Screws/N-5yc1vZc2b0',
  //   'Fasteners',
  // ],
  // [
  //   'https://www.homedepot.com/b/Building-Materials-Concrete-Cement-Masonry-Concrete-Mix/N-5yc1vZcdpt',
  //   'Concrete Mix',
  // ],

  // [
  //   'https://www.homedepot.com/b/Building-Materials-Concrete-Cement-Masonry-Mortar-Mix/N-5yc1vZcdq4',
  //   'Mortar Mix',
  // ],
  // [
  //   'https://www.homedepot.com/b/Building-Materials-Concrete-Cement-Masonry-Stucco-Stucco-Mix/N-5yc1vZ2fkp5ot',
  //   'Stucco Mix',
  // ],
  // [
  //   'https://www.homedepot.com/b/Building-Materials-Concrete-Cement-Masonry-Concrete-Tools/N-5yc1vZarh8',
  //   'Concrete Tools',
  // ],
  // [
  //   'https://www.homedepot.com/b/Building-Materials-Ventilation/N-5yc1vZc4mr?catStyle=ShowProducts&sortorder=desc&sortby=topsellers',
  //   'Ventilations',
  // ],
  // [
  //   'https://www.homedepot.com/b/Building-Materials-Gutter-Systems/N-5yc1vZardx',
  //   'Gutters',
  // ],
  // [
  //   'https://www.homedepot.com/b/Lumber-Composites-Fencing-Gates-Vinyl-Fencing/N-5yc1vZc3mq',
  //   'Vinyl Fencing ',
  // ],
  // [
  //   'https://www.homedepot.com/b/Lumber-Composites-Fencing-Gates-Composite-Fencing/N-5yc1vZc5ug',
  //   'Compopsite Fencing',
  // ],
  // [
  //   'https://www.homedepot.com/b/Lumber-Composites-Fencing-Gates-Metal-Fencing/N-5yc1vZc3le',
  //   'Metal fencing',
  // ],
  // [
  //   'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Boards-Composite-Decking-Boards/N-5yc1vZc5mb',
  //   'Composite Decking Boards',
  // ],
  // [
  //   'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Boards-Wood-Decking-Boards/N-5yc1vZc80m',
  //   'Wood Decking Board',
  // ],
  // [
  //   'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Boards-PVC-Deck-Boards/N-5yc1vZc5mu',
  //   'PVC Deck Board',
  // ],
  // [
  //   'https://www.homedepot.com/b/Building-Materials-Siding-Wood-Siding/N-5yc1vZc8aj',
  //   'Wood Siding',
  // ],
  // [
  //   'https://www.homedepot.com/b/Building-Materials-Siding-Vinyl-Siding/N-5yc1vZc8a6',
  //   'Vinyl Siding ',
  // ],
  // [
  //   'https://www.homedepot.com/b/Building-Materials-Siding-Composite-Siding/N-5yc1vZc8ik',
  //   'Composite Siding ',
  // ],
  // [
  //   'https://www.homedepot.com/b/Building-Materials-Siding-Stone-Veneer-Siding/N-5yc1vZc85v',
  //   'Stone Venner',
  // ],
  // [
  //   'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Railings-Deck-Railing-Systems/N-5yc1vZc5px',
  //   'Deck Railing System',
  // ],
  // [
  //   'https://www.homedepot.com/b/Building-Materials-Siding-Fiber-Cement-Siding/N-5yc1vZc8af',
  //   'Fiber Siding',
  // ],
  // [
  //   'https://www.homedepot.com/b/Building-Materials-Siding-Siding-Trim/N-5yc1vZaq0n',
  //   'Siding Trim',
  // ],
  {
    category: 'Siding Accessories',
    link: 'https://www.homedepot.com/b/Building-Materials-Siding-Siding-Accessories/N-5yc1vZ2fkp9fi',
    // maxItems: 100,
    maxItems: 25,
  },
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
];

const crawl: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'home-depot-crawl',

  task: [
    async () => {
      const http = new HttpImplementation();
      for (const row of CATEGORIES) {
        const { category, link, maxItems } = row;
        const maxPages = maxItems ? Math.ceil(maxItems / 24) : undefined;
        range(0, maxPages ?? 6).map((pageIndex) => {
          console.warn(pageIndex);
          try {
            void http.get({
              params: {
                category,
                link: `${link}?sortby=topsellers&sororder=desc`,
                maxItems,
                pageIndex,
              },
              // url: 'https://zxe9mbv4ve.execute-api.us-east-1.amazonaws.com/api/crawl',
              url: 'https://localhost:5001/api/crawl',
            });
          } catch (e) {}
        });
      }
      //
    },
  ],
};

export default crawl;
