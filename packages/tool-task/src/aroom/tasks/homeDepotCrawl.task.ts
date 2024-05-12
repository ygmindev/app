import { HttpImplementation } from '@lib/backend/http/utils/HttpImplementation/HttpImplementation';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import range from 'lodash/range';

const CATEGORIES: Array<{
  category?: string;
  link: string;
  maxItems?: number;
}> = [
  // {
  //   category: 'Dimensional Lumber',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Dimensional-Lumber/N-5yc1vZc3tc',
  //   maxItems: 120,
  // },
  // {
  //   category: 'Pressure Treated Lumber',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Pressure-Treated-Lumber/N-5yc1vZc3sr',
  //   maxItems: 90,
  // },
  // {
  //   category: 'Appearance Boards',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Boards-Planks-Panels-Appearance-Boards/N-5yc1vZbqmc',
  //   maxItems: 800,
  // },
  // {
  //   category: 'Wall Paneling',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Boards-Planks-Panels-Wall-Paneling/N-5yc1vZbqp3',
  //   maxItems: 1000,
  // },
  // {
  //   category: 'Sheathing Plywood',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Plywood-Sheathing-Plywood/N-5yc1vZc7q5',
  //   maxItems: 20,
  // },
  // {
  //   category: 'OSB',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Plywood-Oriented-Strand-Board-OSB/N-5yc1vZbqpq',
  //   maxItems: 20,
  // },
  // {
  //   category: 'Hardwood Plywood',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Plywood-Hardwood-Plywood/N-5yc1vZc7r1',
  //   maxItems: 20,
  // },
  // {
  //   category: 'Project Panels',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Plywood-Project-Panels/N-5yc1vZc7hm',
  //   maxItems: 250,
  // },
  // {
  //   category: 'Shims',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Shims/N-5yc1vZbqjt',
  //   maxItems: 30,
  // },
  // {
  //   category: 'MDF',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Plywood-MDF/N-5yc1vZbtn1',
  //   maxItems: 10,
  // },
  // {
  //   category: 'Sanded Plywood',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Plywood-Sanded-Plywood/N-5yc1vZc7qk',
  //   maxItems: 20,
  // },
  // {
  //   category: 'Particle Board',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Plywood-Particle-Board/N-5yc1vZ2fkpa44',
  //   maxItems: 5,
  // },
  // {
  //   category: 'Wood Decking Boards',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Boards-Wood-Decking-Boards/N-5yc1vZc80m',
  //   maxItems: 80,
  // },
  // {
  //   category: 'Composite Decking Boards',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Boards-Composite-Decking-Boards/N-5yc1vZc5mb',
  //   maxItems: 200,
  // },
  // {
  //   category: 'Deck Railing',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Railings/N-5yc1vZc5i7',
  //   maxItems: 1000,
  // },
  // {
  //   category: 'Deck Posts',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Posts/N-5yc1vZcald',
  //   maxItems: 70,
  // },
  // {
  //   category: 'Deck Post Caps',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Post-Caps/N-5yc1vZbqpm',
  //   maxItems: 320,
  // },
  // {
  //   category: 'Deck Post Sleeves',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Post-Sleeves/N-5yc1vZ2fkou1q',
  //   maxItems: 60,
  // },
  // {
  //   category: 'Deck Hardware',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Hardware/N-5yc1vZbqpr',
  //   maxItems: 500,
  // },
  // {
  //   category: 'Deck Parts Accessories',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Parts-Accessories/N-5yc1vZbqnw',
  //   maxItems: 500,
  // },
  // {
  //   category: 'Deck Stairs',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Stairs/N-5yc1vZbqks',
  //   maxItems: 460,
  // },
  // {
  //   category: 'Fascia Boards',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Decking-Fascia-Boards/N-5yc1vZcd5k',
  //   maxItems: 50,
  // },
  // {
  //   category: 'Wood Fencing',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Fencing-Gates-Wood-Fencing/N-5yc1vZc3m6',
  //   maxItems: 120,
  // },
  // {
  //   category: 'Vinyl Fencing',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Fencing-Gates-Vinyl-Fencing/N-5yc1vZc3mq',
  //   maxItems: 850,
  // },
  // {
  //   category: 'Metal Fencing',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Fencing-Gates-Metal-Fencing/N-5yc1vZc3le',
  //   maxItems: 650,
  // },
  // {
  //   category: 'Chain link Fencing',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Fencing-Gates-Chain-Link-Fencing/N-5yc1vZc3lh',
  //   maxItems: 130,
  // },
  // {
  //   category: 'Fence Hardware',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Fencing-Gates-Fence-Hardware/N-5yc1vZc81d',
  //   maxItems: 500,
  // },
  // {
  //   category: 'Gate Hardware',
  //   link: 'https://www.homedepot.com/b/Hardware-Gate-Hardware/N-5yc1vZc2f1',
  //   maxItems: 630,
  // },
  // {
  //   category: 'Gate & Gate Openers',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Fencing-Gates-Gates-Gate-Openers/N-5yc1vZbu77',
  //   maxItems: 400,
  // },
  // {
  //   category: 'Post Caps',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Fencing-Gates-Fence-Post-Caps/N-5yc1vZbtx2',
  //   maxItems: 320,
  // },
  // {
  //   category: 'Composite Fencing',
  //   link: 'https://www.homedepot.com/b/Lumber-Composites-Fencing-Gates-Composite-Fencing/N-5yc1vZc5ug',
  //   maxItems: 160,
  // },
  // {
  //   category: 'Concrete Aggregates',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Concrete-Cement-Masonry-Concrete-Aggregates/N-5yc1vZcdqc',
  //   maxItems: 20,
  // },
  // {
  //   category: 'Concrete Mix',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Concrete-Cement-Masonry-Concrete-Mix/N-5yc1vZcdpt',
  //   maxItems: 15,
  // },
  // {
  //   category: 'Cinder Blocks',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Concrete-Cement-Masonry-Cinder-Blocks/N-5yc1vZcdpe',
  //   maxItems: 30,
  // },
  // {
  //   category: 'Concrete Repair',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Concrete-Cement-Masonry-Concrete-Repair/N-5yc1vZ2fkp62x',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Asphalt Repair',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Concrete-Cement-Masonry-Asphalt-Repair/N-5yc1vZ2fkp5qz',
  //   maxItems: 70,
  // },
  // {
  //   category: 'Rebar Accessories',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Concrete-Cement-Masonry-Rebar-Accessories/N-5yc1vZ2fkp63n',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Concrete Parts Accessories',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Concrete-Cement-Masonry-Concrete-Parts-Accessories/N-5yc1vZ2fkpbx1',
  //   maxItems: 600,
  // },
  // {
  //   category: 'Mortar Mix',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Concrete-Cement-Masonry-Mortar-Mix/N-5yc1vZcdq4',
  //   maxItems: 20,
  // },
  // {
  //   category: 'Concrete Forms',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Concrete-Cement-Masonry-Concrete-Forms/N-5yc1vZbv35',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Bricks',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Concrete-Cement-Masonry-Bricks/N-5yc1vZcdpa',
  //   maxItems: 180,
  // },
  // {
  //   category: 'Concrete Tools',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Concrete-Cement-Masonry-Concrete-Tools/N-5yc1vZarh8',
  //   maxItems: 850,
  // },
  // {
  //   category: 'Stucco',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Concrete-Cement-Masonry-Stucco/N-5yc1vZ2fkp5ox',
  //   maxItems: 80,
  // },
  // {
  //   category: 'Adhesives Forttifiers',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Concrete-Cement-Masonry-Adhesives-Fortifiers/N-5yc1vZcdpg',
  //   maxItems: 30,
  // },
  // {
  //   category: 'Wire Mesh',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Concrete-Cement-Masonry-Wire-Mesh/N-5yc1vZ1z18g8t',
  //   maxItems: 5,
  // },
  // {
  //   category: 'Door & Window Moulding',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Moulding-Millwork-Moulding-Door-Window-Moulding/N-5yc1vZcbjm',
  //   maxItems: 1100,
  // },
  // {
  //   category: 'Baseboard',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Moulding-Millwork-Moulding-Baseboard/N-5yc1vZcbjp',
  //   maxItems: 350,
  // },
  // {
  //   category: 'General Purpose Moulding',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Moulding-Millwork-Moulding-General-Purpose-Moulding/N-5yc1vZcbj5',
  //   maxItems: 200,
  // },
  // {
  //   category: 'Stairs Parts',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Moulding-Millwork-Stair-Parts/N-5yc1vZbcro',
  //   maxItems: 1000,
  // },
  // {
  //   category: 'Crwon Moulding',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Moulding-Millwork-Moulding-Crown-Moulding/N-5yc1vZcbji',
  //   maxItems: 780,
  // },
  // {
  //   category: 'Shoe Quarter Round Moulding',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Moulding-Millwork-Moulding-Shoe-Quarter-Round/N-5yc1vZcldr',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Corner Moulding',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Moulding-Millwork-Moulding-Corner-Moulding/N-5yc1vZcbjf',
  //   maxItems: 90,
  // },
  // {
  //   category: 'Chair Rail',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Moulding-Millwork-Moulding-Chair-Rail/N-5yc1vZcbjj',
  //   maxItems: 640,
  // },
  // {
  //   category: 'Columns Accessories',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Moulding-Millwork-Columns-Accessories/N-5yc1vZaqok',
  //   maxItems: 1100,
  // },
  // {
  //   category: 'Dowels',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Moulding-Millwork-Dowels/N-5yc1vZaqif',
  //   maxItems: 90,
  // },
  // {
  //   category: 'Brackets & Braces',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Moulding-Millwork-Brackets-Braces/N-5yc1vZcbj9',
  //   maxItems: 600,
  // },
  // {
  //   category: 'Drywall Sheets',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Drywall-Drywall-Sheets/N-5yc1vZbb52',
  //   maxItems: 30,
  // },
  // {
  //   category: 'Joint Compound',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Drywall-Joint-Compound/N-5yc1vZard11',
  //   maxItems: 20,
  // },
  // {
  //   category: 'Corner Bead',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Drywall-Drywall-Corner-Bead/N-5yc1vZc7qn',
  //   maxItems: 70,
  // },
  // {
  //   category: 'Drywall Tools',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Drywall-Drywall-Tools/N-5yc1vZaro4',
  //   maxItems: 700,
  // },
  // {
  //   category: 'Drywall Tape',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Drywall-Drywall-Tape/N-5yc1vZc7qe',
  //   maxItems: 60,
  // },
  // {
  //   category: 'Cement Boards',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Drywall-Cement-Boards/N-5yc1vZcb0f',
  //   maxItems: 15,
  // },
  // {
  //   category: 'Steel Stud Framing',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Drywall-Drywall-Steel-Studs-Framing/N-5yc1vZbuim',
  //   maxItems: 45,
  // },
  // {
  //   category: 'Repair Tools',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Drywall-Drywall-Repair-Tools/N-5yc1vZc7r0',
  //   maxItems: 80,
  // },
  // {
  //   category: 'Drywall Screws',
  //   link: 'https://www.homedepot.com/b/Hardware-Fasteners-Screws-Drywall-Screws/N-5yc1vZc2at',
  //   maxItems: 110,
  // },
  // {
  //   category: 'Fiberglass Insulation',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Insulation-Fiberglass-Insulation/N-5yc1vZbay7',
  //   maxItems: 140,
  // },
  // {
  //   category: 'Foam Board Insulation',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Insulation-Foam-Board-Insulation/N-5yc1vZbaxx',
  //   maxItems: 40,
  // },
  // {
  //   category: 'Spray Foam Insulation',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Insulation-Spray-Foam-Insulation/N-5yc1vZbaxj',
  //   maxItems: 50,
  // },
  // {
  //   category: 'Insulation Accessories',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Insulation-Insulation-Accessories/N-5yc1vZbmgs',
  //   maxItems: 170,
  // },
  // {
  //   category: 'Blown-in Insulation',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Insulation-Blown-in-Insulation/N-5yc1vZbayp',
  //   maxItems: 10,
  // },
  // {
  //   category: 'Mineral Wool Insulation',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Insulation-Mineral-Wool-Insulation/N-5yc1vZboco',
  //   maxItems: 30,
  // },
  // {
  //   category: 'Radiant Barrier',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Insulation-Radiant-Barrier/N-5yc1vZbedf',
  //   maxItems: 60,
  // },
  // {
  //   category: 'Roof Shingles',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Roofing-Roof-Shingles/N-5yc1vZc5rb',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Metal Roofing',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Roofing-Roof-Panels-Metal-Roofing/N-5yc1vZapwh',
  //   maxItems: 30,
  // },
  // {
  //   category: 'Gutter Systems',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Gutter-Systems/N-5yc1vZardx',
  //   maxItems: 610,
  // },
  // {
  //   category: 'Roof Panels',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Roofing-Roof-Panels/N-5yc1vZaq4r',
  //   maxItems: 150,
  // },
  // {
  //   category: 'Commercial Roofing',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Roofing-Commercial-Roofing/N-5yc1vZapzz',
  //   maxItems: 190,
  // },
  // {
  //   category: 'Roof Flahsing',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Roofing-Roof-Flashing/N-5yc1vZaqp7',
  //   maxItems: 250,
  // },
  // {
  //   category: 'Roof Underlayments',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Roofing-Roof-Underlayments/N-5yc1vZc5rw',
  //   maxItems: 45,
  // },
  // {
  //   category: 'Roofing Tools',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Roofing-Roofing-Tools/N-5yc1vZc938',
  //   maxItems: 250,
  // },
  // {
  //   category: 'Roll Roofing',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Roofing-Roll-Roofing/N-5yc1vZaqaa',
  //   maxItems: 20,
  // },
  // {
  //   category: 'Roofing & Attic Ventilation',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Ventilation-Roofing-Attic-Ventilation/N-5yc1vZc663',
  //   maxItems: 1000,
  // },
  // {
  //   category: 'Ventilation Accessories',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Ventilation-Ventilation-Accessories/N-5yc1vZc66f',
  //   maxItems: 100,
  // },
  // {
  //   category: 'Crawl Space Vents',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Ventilation-Crawl-Space-Vents/N-5yc1vZc666',
  //   maxItems: 30,
  // },
  // {
  //   category: 'Siding Vents',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Ventilation-Siding-Vents/N-5yc1vZc66s',
  //   maxItems: 25,
  // },
  // {
  //   category: 'Foam Temporary Ventilation',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Ventilation-Foam-Temporary-Ventilation/N-5yc1vZc66h',
  //   maxItems: 3,
  // },
  // {
  //   category: 'Siding Tirm',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Siding-Siding-Trim/N-5yc1vZaq0n',
  //   maxItems: 250,
  // },
  // {
  //   category: 'Compositie Siding',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Siding-Composite-Siding/N-5yc1vZc8ik',
  //   maxItems: 120,
  // },
  // {
  //   category: 'Wood Siding',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Siding-Wood-Siding/N-5yc1vZc8aj',
  //   maxItems: 60,
  // },
  // {
  //   category: 'Cement Siding',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Siding-Fiber-Cement-Siding/N-5yc1vZc8af',
  //   maxItems: 580,
  // },
  // {
  //   category: 'Veneer Siding',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Siding-Stone-Veneer-Siding/N-5yc1vZc85v',
  //   maxItems: 440,
  // },
  // {
  //   category: 'Vinyl Siding',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Siding-Vinyl-Siding/N-5yc1vZ2fkp9fn',
  //   maxItems: 160,
  // },
  // {
  //   category: 'Siding Tools',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Siding-Siding-Tools/N-5yc1vZaq1t',
  //   maxItems: 160,
  // },
  // {
  //   category: 'Siding Acecessories',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Siding-Siding-Accessories/N-5yc1vZ2fkp9fi',
  //   maxItems: 320,
  // },
  // {
  //   category: 'Veneer Siding',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Siding-Brick-Veneer-Siding/N-5yc1vZ2fkpaoy',
  //   maxItems: 50,
  // },
  // {
  //   category: 'Step Ladders',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Ladders-Step-Ladders/N-5yc1vZaq3d',
  //   maxItems: 230,
  // },
  // {
  //   category: 'Multi Position Ladders',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Ladders-Multi-Position-Ladders/N-5yc1vZasew',
  //   maxItems: 70,
  // },
  // {
  //   category: 'Attic Ladders',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Ladders-Attic-Ladders/N-5yc1vZaqfh',
  //   maxItems: 50,
  // },
  // {
  //   category: 'Extension Ladders',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Ladders-Extension-Ladders/N-5yc1vZar0w',
  //   maxItems: 120,
  // },
  // {
  //   category: 'Step Stools',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Ladders-Step-Stools/N-5yc1vZarja',
  //   maxItems: 290,
  // },
  // {
  //   category: 'Ladder Accessories',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Ladders-Ladder-Accessories/N-5yc1vZaq1y',
  //   maxItems: 110,
  // },
  // {
  //   category: 'Work Platforms',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Ladders-Work-Platforms/N-5yc1vZcbp1',
  //   maxItems: 30,
  // },
  // {
  //   category: 'Platform Ladders',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Ladders-Platform-Ladders/N-5yc1vZcd4z',
  //   maxItems: 60,
  // },
  // {
  //   category: 'Baker Scaffolding Sets',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Scaffolding-Scaffolding-Sets/Baker/N-5yc1vZcbozZ1z1a4p7',
  //   maxItems: 30,
  // },
  // {
  //   category: 'Scaffolding Sets',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Scaffolding-Scaffolding-Sets/N-5yc1vZcboz',
  //   maxItems: 40,
  // },
  // {
  //   category: 'Scaffolding Planks',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Scaffolding-Scaffolding-Planks/N-5yc1vZch54',
  //   maxItems: 60,
  // },
  // {
  //   category: 'Scaffolding Frames',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Scaffolding-Scaffolding-Frames/N-5yc1vZ1z18gzk',
  //   maxItems: 30,
  // },
  // {
  //   category: 'Scaffolding Parts',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Scaffolding-Scaffolding-Parts/N-5yc1vZcboy',
  //   maxItems: 110,
  // },
  // {
  //   category: 'Pump Jack',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Scaffolding-Pump-Jack-Scaffolding/N-5yc1vZcbp0',
  //   maxItems: 30,
  // },
  // {
  //   category: 'Plexiglass',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Glass-Plastic-Sheets-Plexiglass/N-5yc1vZc9x2',
  //   maxItems: 420,
  // },
  // {
  //   category: 'Polycarbonate',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Glass-Plastic-Sheets-Polycarbonate-Sheets/N-5yc1vZc9ws',
  //   maxItems: 60,
  // },
  // {
  //   category: 'Corrugated Plastic Sheets',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Glass-Plastic-Sheets-Corrugated-Plastic-Sheets/N-5yc1vZcbtu',
  //   maxItems: 40,
  // },
  // {
  //   category: 'Glass Sheets',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Glass-Plastic-Sheets-Glass-Sheets/N-5yc1vZaqjn',
  //   maxItems: 20,
  // },
  // {
  //   category: 'Rubber Sheets',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Glass-Plastic-Sheets-Rubber-Sheets/N-5yc1vZcj87',
  //   maxItems: 1000,
  // },
  // {
  //   category: 'Ceiling Tiles',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Ceilings-Ceiling-Tiles/N-5yc1vZc58l',
  //   maxItems: 620,
  // },
  // {
  //   category: 'Ceiling Grids',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Ceilings-Ceiling-Grids/N-5yc1vZc596',
  //   maxItems: 50,
  // },
  // {
  //   category: 'Ceiling Light Panels',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Ceilings-Ceiling-Light-Panels/N-5yc1vZc58p',
  //   maxItems: 40,
  // },
  // {
  //   category: 'Ceiling Tile Tools',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Ceilings-Ceiling-Tile-Tools/N-5yc1vZc59f',
  //   maxItems: 60,
  // },
  // {
  //   category: 'Cornice Moulding',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Ceilings-Cornice-Moulding/N-5yc1vZc58j',
  //   maxItems: 140,
  // },
  // {
  //   category: 'Ceiling Medallions',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Moulding-Millwork-Ceiling-Medallions/N-5yc1vZcbj6',
  //   maxItems: 1000,
  // },
  // {
  //   category: 'Screws',
  //   link: 'https://www.homedepot.com/b/Hardware-Fasteners-Screws/N-5yc1vZc2b0',
  //   maxItems: 1000,
  // },
  // {
  //   category: 'Anchors',
  //   link: 'https://www.homedepot.com/b/Hardware-Fasteners-Anchors/N-5yc1vZc2e5',
  //   maxItems: 430,
  // },
  // {
  //   category: 'Fasteners',
  //   link: 'https://www.homedepot.com/b/Hardware-Fasteners-Collated-Fasteners/N-5yc1vZc282',
  //   maxItems: 550,
  // },
  // {
  //   category: 'Wood Screws',
  //   link: 'https://www.homedepot.com/b/Hardware-Fasteners-Screws-Wood-Screws/N-5yc1vZc2bl',
  //   maxItems: 780,
  // },
  // {
  //   category: 'Composite Fasteners',
  //   link: 'https://www.homedepot.com/b/Hardware-Fasteners-Specialty-Fasteners-Composite-Fasteners/N-5yc1vZc2c2',
  //   maxItems: 290,
  // },
  // {
  //   category: 'Nails',
  //   link: 'https://www.homedepot.com/b/Hardware-Fasteners-Nails/N-5yc1vZc2dx',
  //   maxItems: 330,
  // },
  // {
  //   category: 'Bolts',
  //   link: 'https://www.homedepot.com/b/Hardware-Fasteners-Bolts/N-5yc1vZc26w',
  //   maxItems: 800,
  // },
  // {
  //   category: 'Nuts',
  //   link: 'https://www.homedepot.com/b/Hardware-Fasteners-Nuts/N-5yc1vZc2el',
  //   maxItems: 740,
  // },
  // {
  //   category: 'Washers',
  //   link: 'https://www.homedepot.com/b/Hardware-Fasteners-Washers/N-5yc1vZc276',
  //   maxItems: 590,
  // },
  // {
  //   category: 'Metal-Hook',
  //   link: 'https://www.homedepot.com/b/Hardware-Fasteners-Metal-Hooks/N-5yc1vZc2ga',
  //   maxItems: 320,
  // },
  // {
  //   category: 'Post Brackets',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Building-Hardware-Post-Brackets/N-5yc1vZc8hv',
  //   maxItems: 190,
  // },
  // {
  //   category: 'Joist Hangers',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Building-Hardware-Joist-Hangers/N-5yc1vZaqxb',
  //   maxItems: 300,
  // },
  // {
  //   category: 'Wood Connectors',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Building-Hardware-Wood-Connectors/N-5yc1vZaq9x',
  //   maxItems: 310,
  // },
  // {
  //   category: 'Metal Strap',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Building-Hardware-Metal-Straps/N-5yc1vZaqta',
  //   maxItems: 330,
  // },
  // {
  //   category: 'Corner Braces',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Building-Hardware-Corner-Braces/N-5yc1vZc8hr',
  //   maxItems: 110,
  // },
  // {
  //   category: 'Jack Posts',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Building-Hardware-Jack-Posts/N-5yc1vZc8hw',
  //   maxItems: 25,
  // },
  // {
  //   category: 'Nail Plates',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Building-Hardware-Nail-Plates/N-5yc1vZc8ht',
  //   maxItems: 20,
  // },
  // {
  //   category: 'Meding Plates',
  //   link: 'https://www.homedepot.com/b/Building-Materials-Building-Hardware-Mending-Plates/N-5yc1vZasc4',
  //   maxItems: 45,
  // },
  {
    category: 'Meding Plates',
    link: 'https://www.homedepot.com/b/Building-Materials-Building-Hardware-Mending-Plates/N-5yc1vZasc4',
    maxItems: 10,
  },
];

const START_PAGE = 1;

const START_ITEM = 1;

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
        for (const pageIndex of range(START_PAGE - 1, maxPages ?? 10)) {
          for (const start of range(START_ITEM - 1, Math.ceil(PAGE_SIZE / BATCH_SIZE))) {
            console.warn(`@ ${category} page: $${pageIndex + 1}, start: ${start * BATCH_SIZE + 1}`);
            // await sleep(randomInt(1000, 10000));
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
                  url: 'https://60xsals2ze.execute-api.us-west-1.amazonaws.com/api/crawl',
                  // url: 'https://localhost:5001/api/crawl',
                })
                .catch((e) => {
                  console.warn(e);
                });
            } catch (e) {}
            await sleep(60000);
          }
        }
      }
    },
  ],
};

export default crawl;
