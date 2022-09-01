# ACF JSON Field

JSON field for Advanced Custom Fields.

![Preview Field in Wordpress admin](https://raw.githubusercontent.com/bitterendio/acf-field-type-json/master/screenshot.png)

## Usage

### Basic usage

    // Get encoded JSON
    $json = get_field('json_field');

    // Decode JSON to object
    $value = json_decode($json);

    // Use the values
    echo $value->something;

### Pass to javascript variable

    <script type="text/javascript">
      window.my_acf_name = <?php echo get_field('json_field') ?>;
    </script>

---

### Description

JSON field for Advanced Custom Fields.

### Compatibility

This ACF field type is compatible with:

- ACF 5

### Installation

1.  Copy the `acf-field-type-json` folder into your `wp-content/plugins` folder
2.  Activate the Advanced Custom Fields: JSON plugin via the plugins admin page
3.  Create a new field via ACF and select the JSON type
4.  Please refer to the description for more info regarding the field type settings

### Tests

#### Unit Tests

```sh
composer run-script test
```

#### Integration Tests

With local setup

```sh
composer run-script test:wordpress
```

Using docker
```sh
docker-compose run phpunit
composer install
composer:test:wordpress
```

### Changelog

Please see `readme.txt` for changelog

## Credits

This ACF field relies heavily on great package https://github.com/josdejong/jsoneditor
