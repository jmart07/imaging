require 'test_helper'

class ShapesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @shape = shapes(:one)
  end

  test "should get index" do
    get shapes_url, as: :json
    assert_response :success
  end

  test "should create shape" do
    assert_difference('Shape.count') do
      post shapes_url, params: { shape: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show shape" do
    get shape_url(@shape), as: :json
    assert_response :success
  end

  test "should update shape" do
    patch shape_url(@shape), params: { shape: {  } }, as: :json
    assert_response 200
  end

  test "should destroy shape" do
    assert_difference('Shape.count', -1) do
      delete shape_url(@shape), as: :json
    end

    assert_response 204
  end
end
