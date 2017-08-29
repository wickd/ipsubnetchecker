jQuery(document).ready(function ($)
{
    var $ipv4_input = $("input[name = ipv4_address]");
    var $cidr_input = $("input[name = ipv4_cidr]");
    var $form = $("#subnet_checker_form");
    var $checked_list = $("#checked-ips");

    // todo: get template from partial pug..
    var tableTemplate = function ()
    {
        var temp = '<thead><tr>';

        temp += "<th>IP-Address</th>"
        temp += "<th>Subnet</th>";
        temp += "<th>Mask</th>";
        temp += "<th>Output</th>";

        return temp + '</tr></thead>';
    }

    // the same stuff, template must incoming from server. "compiled"!
    var renderTableRowTemplate = function (row)
    {
        var temp = "<tr>";

        temp += "<td>" + row.ip + "</td>";
        temp += "<td>" + row.subnet + "</td>";
        temp += "<td>" + row.mask + "</td>";
        temp += "<td>" + row.output + "</td>";

        return temp + "</tr>";
    }

    $ipv4_input.mask("0ZZ.0ZZ.0ZZ.0ZZ", {
        placeholder: "255.255.255.255",
        translation: {
            'Z': { pattern: /[0-9]/, optional: true }
        }
    });

    $cidr_input.mask("0ZZ.0ZZ.0ZZ.0ZZ/ZZ", {
        placeholder: "255.255.255.255",
        translation: {
            'Z': { pattern: /[0-9]/, optional: true }
        }
    });

    $form.submit(function (e)
    {
        var $btn = $form.find('button');

        $btn.button('loading');

        $.ajax({
            type: $form.attr('method'),
            data: $form.serialize()
        })
        .done(function (data, status, response)
        {
            $btn.button('reset');

            switch (response.status)
            {
                case 200:
                    if (! $checked_list.find('thead').length)
                    {
                        $checked_list.append(tableTemplate);
                    }

                    $checked_list.append(renderTableRowTemplate(data));

                    break;
                case 400:
                    break;
                default:
                    break;
            }

            $form[0].reset();
        });

        // avoid to execute the actual submit of the form.
        e.preventDefault();
    });
}(jQuery));