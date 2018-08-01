class CarsController < ApplicationController
  before_action :set_car, only: [:show, :update, :edit, :destroy]
  def index
    user = current_user
    @cars = user.cars
  end
  def new
     @car = Car.new
  end
  def create
    @car = Car.new(car_params)
    @car.user = current_user
    if @car.save
      redirect_to cars_path(current_user)
    else
      render :new
    end
  end
  def edit
     #render
  end
  def update
    @car.update(car_params)
    redirect_to cars_path(current_user)
  end
  def destroy
    @car.destroy
    user = @car.user
    redirect_to cars_path(current_user)
  end
  private
  def set_car
    @car = Car.find(params[:id])
  end
  def car_params
    params.require(:car).permit(:license, :brand, :model, :colour)
  end
end
