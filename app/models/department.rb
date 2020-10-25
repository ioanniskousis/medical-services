class Department < ApplicationRecord
  has_many :bookings, dependent: :destroy

  def as_json(*)
    {id: id, name: name, order: order}
  end
end
