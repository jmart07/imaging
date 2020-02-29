# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_29_041318) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "pgcrypto"
  enable_extension "plpgsql"

  create_table "shapes", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.integer "template_id"
    t.string "shape_type"
    t.integer "x"
    t.integer "y"
    t.integer "width"
    t.integer "height"
    t.string "text"
    t.integer "fontSize"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "visible"
  end

  create_table "students", force: :cascade do |t|
    t.string "id_number"
    t.string "exportid"
    t.string "last_name"
    t.string "first_name"
    t.string "barcode"
    t.date "graduation"
    t.string "note1"
    t.string "note2"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "templates", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
