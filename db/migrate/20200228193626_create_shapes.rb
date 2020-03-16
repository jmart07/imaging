class CreateShapes < ActiveRecord::Migration[6.0]
  def change
    create_table :shapes do |t|
      t.integer :template_id
      t.string :shape_type
      t.integer :x
      t.integer :y
      t.integer :width
      t.integer :height
      t.string :text
      t.integer :font_size

      t.timestamps
    end
  end
end
