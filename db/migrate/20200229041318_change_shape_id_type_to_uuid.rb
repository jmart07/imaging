class ChangeShapeIdTypeToUuid < ActiveRecord::Migration[6.0]
  def change
    add_column :shapes, :uuid, :uuid, default: "gen_random_uuid()", null: false

    change_table :shapes do |t|
      t.remove :id
      t.rename :uuid, :id
    end
    execute "ALTER TABLE shapes ADD PRIMARY KEY (id);"
  end
end
