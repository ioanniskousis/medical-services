class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username, null: false, length: { minimum: 3 }, index: { unique: true }
      t.string :password, null: false, length: { minimum: 3 }, index: { unique: true }
      t.string :fullname, null: false, length: { minimum: 7 }
      t.string :email, null: false, length: { minimum: 8 }, index: { unique: true }
      t.boolean :admin, default: false

      t.timestamps
    end
  end
end
