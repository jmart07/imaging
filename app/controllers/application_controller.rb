class ApplicationController < ActionController::API
    def fallback_index_html
        render :file => 'public\imaging-client\public\index.html'
    end
end
