class RenameLayoutsTableToCardShapes < ActiveRecord::Migration[6.0]
  def change
    rename_table :layouts, :shapes
  end
end
