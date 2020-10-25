class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :department

  validates :user_id, presence: true
  validates :department_id, presence: true
  validates :timeStamp, presence: true

  def as_json(*)
    {
      id: id,
      user_id: user_id,
      department_id: department_id,
      department: department.name,
      doctorsBoard: doctorsBoard,
      description: description,
      timeStamp: timeStamp
    }
  end
end
