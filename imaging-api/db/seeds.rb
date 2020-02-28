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

Template.create({name: "Bad guys"})
Template.create({name: "Good guys"})

p "Seeding shapes"

shapes = [
    {
      id: 1,
      type: 'idNumber',
      x: 390,
      y: 120,
      text: '1234567',
      fontSize: 30
    },
    {
      id: 1,
      type: 'photo',
      x: 80,
      y: 60,
      width: 230,
      height: 230
    },
    {
      id: 1,
      type: 'name',
      x: 390,
      y: 90,
      text: 'John Martin',
      fontSize: 30
    },
    {
      id: 1,
      type: 'exportId',
      x: 390,
      y: 150,
      text: 'EXPORTID',
      fontSize: 30
    },
    {
      id: 1,
      type: 'barcode',
      x: 130,
      y: 300,
      text: 'BARCODE',
      fontSize: 100
    },
    {
      id: 1,
      type: 'grade',
      x: 390,
      y: 240,
      text: 'Class of 2020',
      fontSize: 30
    }
]

shapes.each {|shape|
    Shape.create({shape})
}

p "Done seeding"