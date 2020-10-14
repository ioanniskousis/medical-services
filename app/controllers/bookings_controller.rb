class BookingsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_booking, only: [:show, :edit, :update, :destroy]
  before_action :require_login

  # GET /bookings
  # GET /bookings.json
  def index
    @current_user = User.find(session[:user_id])
    user = params[:user]
    department = params[:department]
    if user
      # @current_user = User.find(session[:user_id])
      render json: Booking.where('user_id  = ?', session[:user_id])
        .joins(:department)
        .includes(:department)
        .select('departments.name AS department_name')
        .order(timeStamp: :desc)
      # render json: @current_user.bookings
      # .joins(:department).select('bookings.id, bookings.timeStamp, departments.name AS department_name')
      # .select(:timeStamp).joins(:department).includes(:department, :user).select('departments.name AS department_name, users.fullname')
    elsif department
      @department = Department.find(department)
      render json: @department.bookings.joins(:department).includes(:department).select('departments.name AS department_name')
    else
      render json: Booking.all.joins(:department).includes(:department).select('departments.name AS department_name')
    end
    # render json: @current_user.bookings.joins(:department).includes(:department).select('departments.name AS department_name')
  end

  # GET /bookings/1
  # GET /bookings/1.json
  def show
  end

  # GET /bookings/new
  def new
    @booking = Booking.new
  end

  # GET /bookings/1/edit
  def edit
  end

  # POST /bookings
  # POST /bookings.json
  def create
    @current_user = User.find(session[:user_id])
    # puts @current_user.fullname
    # puts '==================================================='
    # puts params[:data]["department_id"]
    # puts params[:data]["description"]
    # puts '==================================================='
    # @booking = Booking.new(booking_params)
    @booking = Booking.new(
      user_id: @current_user.id,
      department_id: params[:data]["department_id"],
      timeStamp: params[:data]["timeStamp"],
      doctorsBoard: params[:data]["doctorsBoard"],
      description: params[:data]["description"]
    );
    # puts '==================================================='
    # puts @booking.to_s
    # puts '==================================================='

    respond_to do |format|
      if @booking.save
        format.html { redirect_to @booking, notice: 'Booking was successfully created.' }
        format.json { render :show, status: :created, location: @booking }
      else
        format.html { render :new }
        format.json { render json: @booking.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /bookings/1
  # PATCH/PUT /bookings/1.json
  def update
    respond_to do |format|
      if @booking.update(booking_params)
        format.html { redirect_to @booking, notice: 'Booking was successfully updated.' }
        format.json { render :show, status: :ok, location: @booking }
      else
        format.html { render :edit }
        format.json { render json: @booking.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /bookings/1
  # DELETE /bookings/1.json
  def destroy
    @booking.destroy
    respond_to do |format|
      format.html { redirect_to bookings_url, notice: 'Booking was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_booking
      @booking = Booking.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def booking_params
      params.fetch(:booking, {})
    end
end
