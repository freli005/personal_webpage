# Personal web page

This is my personal web page, which is based on [**Jekyll**](https://jekyllrb.com/) and a fork of [**Beautiful Jekyll**](https://github.com/daattali/beautiful-jekyll).

## Local development

Requires Ruby 3.2+ (`sudo apt install ruby-full build-essential zlib1g-dev libyaml-dev` on Ubuntu)
and Bundler (`gem install --user-install bundler`).

```sh
bundle config set --local path vendor/bundle   # first time only
bundle install                                  # first time, and after Gemfile changes
bundle exec jekyll serve --livereload           # http://localhost:4000
```

## Deployment

- **Netlify**: builds from `netlify.toml` (`bundle exec jekyll build` -> `_site`).
- **GitHub Pages**: `.github/workflows/pages.yml` builds with GitHub Actions, since
  `jekyll-scholar` is not available in the default Pages builder. Set
  Settings -> Pages -> Source to "GitHub Actions" to enable it.
