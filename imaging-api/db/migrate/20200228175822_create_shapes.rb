class CreateShapes < ActiveRecord::Migration[6.0]
  def change
    create_table :shapes do |t|
      t.string :type
      t.integer :x
      t.integer :y
      t.integer :width
      t.integer :height
      t.string :text
      t.integer :fontsize
      t.references :templates, null: false, foreign_key: true

      t.timestamps
    end
  end
end
