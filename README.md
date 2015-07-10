SpreeFlexibleVariants
=====================

Allows variants to be sold as different sized cuts from a whole product. E.g.
Fat/thin quarters, half metres, and metres from a bolt of fabric.

HowTo
-----

Each product has the optio, `Flexible Variants`, to sell variants at different
sized cuts. The number of flexible units is the total number of the smallest
size you can sell.

Turn off Spree's inventory tracking for each variant in the product.

Installation
------------

Add spree_flexible_variants to your Gemfile:

```ruby
gem 'spree_flexible_variants', :git => 'git@github.com:clomax/spree_flexible_variants.git', :branch => 'xxx'
```

Bundle your dependencies and run the installation generator:

```shell
bundle
bundle exec rails g spree_flexible_variants:install
```

Testing
-------

First bundle your dependencies, then run `rake`. `rake` will default to building the dummy app if it does not exist, then it will run specs. The dummy app can be regenerated by using `rake test_app`.

```shell
bundle
bundle exec rake
```

When testing your applications integration with this extension you may use it's factories.
Simply add this require statement to your spec_helper:

```ruby
require 'spree_flexible_variants/factories'
```

Copyright (c) 2015 Craig Lomax, released under the New BSD License
