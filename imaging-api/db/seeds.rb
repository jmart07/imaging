# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

p "Seeding database"

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

p "Done seeding"


# graduation: {[
#     '2020-6-15',
#     '2021-6-15',
#     '2022-6-15',
#     '2023-6-15',
#     '2024-6-15',
#     '2025-6-15',
#     '2026-6-15',
#     '2027-6-15',
# ].sample()}