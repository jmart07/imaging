class CreateLayouts < ActiveRecord::Migration[6.0]
  def change
    create_table :layouts do |t|
      t.string :type
      t.integer :x
      t.integer :y
      t.integer :width
      t.integer :height
      t.string :text
      t.integer :fontsize

      t.timestamps
    end
  end
end
