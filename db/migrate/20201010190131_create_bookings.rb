class CreateBookings < ActiveRecord::Migration[6.0]
  def change
    create_table :bookings do |t|
      t.references :user, foreign_key: true
      t.references :department, foreign_key: true
      t.string :doctorsBoard
      t.text :description
      t.timestamp :timeStamp, index: true

      t.timestamps
    end
  end
end
