class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :department

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
