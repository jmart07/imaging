class RenameShapeColumnsShapeTypeAndFontsize < ActiveRecord::Migration[6.0]
  def change
    rename_column :shapes, :shapeType, :shape_type
    rename_column :shapes, :fontsize, :font_size
  end
end
