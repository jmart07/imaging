class CreateStudents < ActiveRecord::Migration[6.0]
  def change
    create_table :students do |t|
      t.string :id_number
      t.string :exportid
      t.string :last_name
      t.string :first_name
      t.string :barcode
      t.date :graduation
      t.string :note1
      t.string :note2
      t.timestamps
    end
  end
end
