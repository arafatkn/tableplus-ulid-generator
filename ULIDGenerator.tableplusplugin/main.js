import { ulid } from 'ulid';

var setContent = function(context, ulid) {
  // Get all the items
  var row = context.clickedRow();
  var col = context.clickedColumn();
  var item = context.currentItem();

  if (row == null || col == null || item == null) {
    context.alert('Error', 'No item cliked');
    return;
  }

  if (ulid == null) {
    context.alert('Error', 'Could not generate UUID');
    return;
  }

  // Make sure the constant is nil
  row.setConstant(col.name, '');

  // Update row value
  row.update(col.name, ulid);

  // Add to update queue
  item.addUpdate(row);

  // Notify the change
  context.update();
};

global.generateULID = function (context) {
  setContent(context, ulid());
};
