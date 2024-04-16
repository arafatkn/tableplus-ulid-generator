import { ulid } from 'ulidx';

const setContent = function (context, content) {
  // Get all the items
  const row = context.clickedRow();
  const col = context.clickedColumn();
  const item = context.currentItem();

  if (row == null || col == null || item == null) {
    context.alert('Error', 'No item cliked');
    return;
  }

  if (content == null) {
    context.alert('Error', 'Could not generate UUID');
    return;
  }

  // Make sure the constant is nil
  row.setConstant(col.name, '');

  // Update row value
  row.update(col.name, content);

  // Add to update queue
  item.addUpdate(row);

  // Notify the change
  context.update();
};

global.generateULID = function (context) {
  try {
    const content = ulid(Date.now(), () => Math.random());
    setContent(context, content);
  } catch (e) {
    setContent(context, e.message);
  }
};
