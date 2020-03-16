class RenameColumnInShapesTable < ActiveRecord::Migration[6.0]
  def change
    rename_column :shapes, :font_size, :fontSize
  end
end
