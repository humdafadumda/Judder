
//Judder.InventoriesRoute = Ember.Route.extend(
//  {
    
//    model: function () {
//      return this.store.findAll("inventory");
//    }
//  });

var inventoryDUMMYFixtures = [
  {
    id: 'ID__1',
    number: 1
  },
  {
    id: 'ID__2',
    number: 2
  },
];

var inventoryFixtures = [
  {
    id: 'ID__1',
    number: 1,
    sequence: 1,
    status: 1,
    details: [1, 2]
  },
  {
    id: 'ID__2',
    number: 2,
    sequence: 2,
    status: 2,
    details: []
  },
];


var statusFixtures = [{ id: '1', code: 'status1', descriptions: 'This is the description of status1' }, { id: '2', code: 'status2', descriptions: 'This is the description of status2' }];
var sequenceFixtures = [{ id: '1', code: 'sequence1', descriptions: 'This is the description of sequence1' }, { id: '2', code: 'sequence2', descriptions: 'This is the description of sequence2' }]
var detailFixtures = [{ id: '1', index: 1, description: 'detail1', inventory: 'ID__1' }, { id: '2', index: 2, description: 'detail2', inventory: 'ID__1' }];

var userFixtures = [{ id: 1, name: 'keoe' }];

Judder.User.FIXTURES = userFixtures;
Judder.Status.FIXTURES = statusFixtures;
Judder.Sequence.FIXTURES = sequenceFixtures;
Judder.Inventory.FIXTURES = inventoryFixtures;
Judder.Detail.FIXTURES = detailFixtures;

