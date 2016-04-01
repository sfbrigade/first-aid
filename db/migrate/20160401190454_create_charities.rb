class CreateCharities < ActiveRecord::Migration
  def change
    create_table :charities do |t|
    t.string :title
    t.string :description
    t.string :url
    t.string :street_address
    t.string :city_state
    t.integer :zip_code
    t.float :latitude
    t.float :longitude

    t.timestamps null: false
    end
  end
end
