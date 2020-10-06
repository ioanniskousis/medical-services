class V1::ThingsController < ApplicationController
  def index
    render json: { things: [
      {
        name: 'some-thing',
        guid: 'xcxcx cxcxc xcxcx cxcxcx'
      },
      {
        name: 'some-thing',
        guid: 'xcxcx cxcxc xcxcx cxcxcx'
      },
      {
        name: 'some-thing',
        guid: 'xcxcx cxcxc xcxcx cxcxcx'
      },
      {
        name: 'some-thing',
        guid: 'xcxcx cxcxc xcxcx cxcxcx'
      }
    ]}.to_json
  end
end
