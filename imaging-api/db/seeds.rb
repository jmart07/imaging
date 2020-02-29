# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

p "Seeding students"

10.times { |i|
    Student.create({
        id_number:  1000 + i,
        exportid:   Faker::Number.number(digits: 7),
        last_name:  Faker::Name.last_name,
        first_name: Faker::Name.first_name,
        barcode:    Faker::Number.number(digits: 10),
        graduation: [
            '2020-6-15',
            '2021-6-15',
            '2022-6-15',
            '2023-6-15',
            '2024-6-15',
            '2025-6-15',
            '2026-6-15',
            '2027-6-15',
        ].sample,
        note1: Faker::Avatar.image,
        note2: ''
    })
}

p "Seeding templates"

template1 = Template.create({name: "First Template"})
template1 = Template.create({name: "Second Template"})

p "Seeding shapes"

shapes = [
    {
      template_id: 1,
      shape_type: 'idNumber',
      x: 390,
      y: 120,
      text: '1234567',
      fontSize: 30,
      visible: true
    },
    {
      template_id: 1,
      shape_type: 'photo',
      x: 80,
      y: 60,
      width: 230,
      height: 230,
      visible: true
    },
    {
      template_id: 1,
      shape_type: 'name',
      x: 390,
      y: 90,
      text: 'Name 1',
      fontSize: 30,
      visible: true
    },
    {
      template_id: 1,
      shape_type: 'exportId',
      x: 390,
      y: 150,
      text: 'EXPORTID',
      fontSize: 30,
      visible: true
    },
    {
      template_id: 1,
      shape_type: 'barcode',
      x: 130,
      y: 300,
      text: 'BARCODE',
      fontSize: 100,
      visible: true
    },
    {
      template_id: 1,
      shape_type: 'grade',
      x: 390,
      y: 240,
      text: 'Class of 2020',
      fontSize: 30,
      visible: true
    },
    {
      template_id: 2,
      shape_type: 'idNumber',
      x: 390,
      y: 120,
      text: '89101112',
      fontSize: 30,
      visible: true
    },
    {
      template_id: 2,
      shape_type: 'photo',
      x: 80,
      y: 60,
      width: 230,
      height: 230,
      visible: true
    },
    {
      template_id: 2,
      shape_type: 'name',
      x: 390,
      y: 90,
      text: 'Name 2',
      fontSize: 30,
      visible: true
    },
    {
      template_id: 2,
      shape_type: 'exportId',
      x: 390,
      y: 150,
      text: 'EXPORTID',
      fontSize: 30,
      visible: true
    },
    {
      template_id: 2,
      shape_type: 'barcode',
      x: 130,
      y: 300,
      text: 'BARCODE',
      fontSize: 100,
      visible: true
    },
    {
      template_id: 2,
      shape_type: 'grade',
      x: 390,
      y: 240,
      text: 'Class of 2020',
      fontSize: 30,
      visible: true
    }
]

shapes.each do |shape|
  Shape.create(shape)
end

p "Done seeding"