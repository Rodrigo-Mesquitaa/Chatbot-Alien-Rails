require "test_helper"

class ApplicationSystemTestCase < ActionDispatch::ApplicationSystemTestCase
    drivern_by :selenium, using: :chrome, screen_size: [1400, 1400]
end