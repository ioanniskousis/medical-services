class Department < ApplicationRecord
  has_many :bookings, dependent: :destroy

  def as_json(options={})
    {id: self.id, name: self.name, order: self.order}
  end
end
