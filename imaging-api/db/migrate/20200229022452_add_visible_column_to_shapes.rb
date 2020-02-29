class AddVisibleColumnToShapes < ActiveRecord::Migration[6.0]
  def change
    add_column :shapes, :visible, :boolean
  end
end
