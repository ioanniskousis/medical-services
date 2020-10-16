class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :department

  def as_json(options={})
    {
      id: self.id,
      user_id: self.user_id,
      department_id: self.department_id,
      department: self.department.name,
      doctorsBoard: self.doctorsBoard,
      description: self.description,
      timeStamp: self.timeStamp,
    }
  end
end
