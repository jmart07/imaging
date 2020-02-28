class RenameTypeColumnInShapeToShapeType < ActiveRecord::Migration[6.0]
  def change
    rename_column :shapes, :type, :shapeType
  end
end
