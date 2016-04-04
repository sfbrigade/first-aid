job_type :sidekiq, "cd :path && :environment_variable=:environment bundle exec sidekiq-client push :task :output"


every 5.minutes do
  sidekiq "DisasterWorker"
end
