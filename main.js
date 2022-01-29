function writeString(mystring) {
    var i = 52;
    while (i >= -mystring.length * 7) {
        const current_offset = i;
        setTimeout(function() {
            updatePoint(mystring, current_offset)
        }, (52 - i) * 100)
        i -= 1;
    }
}

function credit() {
    writeString('Made By Lucas JEANPIERRE')
}


function updatePoint(mystring, string_offset) {
    console.log('updatePoint ' + string_offset)
    var x_offset = 0;
    for (var i = 0; i < mystring.length; i++) {
        var current_char = mystring.charAt(i)
        document.querySelectorAll('[class="ContributionCalendar-day"]').forEach(element => {
            if ((element.getAttribute('x') != undefined) && (element.getAttribute('y') != undefined)) {
                var x = -parseInt(element.getAttribute('x')) + 16
                var y = parseInt(parseInt(element.getAttribute('y')) / 15)
                var data_level = '0';
                if (x >= x_offset + string_offset) {
                    try {
                        switch (charToMaxtrix(current_char)[y][x - x_offset - string_offset]) {
                            case 1:
                                data_level = '4';
                                break;

                            case 0:
                                data_level = '0';
                                break;

                            default:
                                data_level = '0';
                                break;
                        }
                    } catch (error) {

                    }
                    element.setAttribute('data-level', data_level)
                } else if (x < string_offset) {
                    element.setAttribute('data-level', 0)
                }
            }
        })
        x_offset += 7;
    }
}

function charToMaxtrix(char) {
    if ((char != undefined) && (char != '') && (char != null)) {
        switch (char) {
            case '1':
                return [
                    [0, 0, 0, 1, 0, 0, 0],
                    [0, 0, 1, 1, 0, 0, 0],
                    [0, 1, 0, 1, 0, 0, 0],
                    [0, 0, 0, 1, 0, 0, 0],
                    [0, 0, 0, 1, 0, 0, 0],
                    [0, 0, 0, 1, 0, 0, 0],
                    [0, 1, 1, 1, 1, 1, 0],
                ]

            case 'A':
                return [
                    [0, 1, 1, 1, 1, 1, 0],
                    [0, 1, 0, 0, 0, 1, 0],
                    [0, 1, 0, 0, 0, 1, 0],
                    [0, 1, 1, 1, 1, 1, 0],
                    [0, 1, 0, 0, 0, 1, 0],
                    [0, 1, 0, 0, 0, 1, 0],
                    [0, 1, 0, 0, 0, 1, 0],
                ]

            case 'B':
                return [
                    [0, 1, 1, 1, 1, 0, 0],
                    [0, 1, 0, 0, 0, 1, 0],
                    [0, 1, 0, 0, 0, 1, 0],
                    [0, 1, 1, 1, 1, 0, 0],
                    [0, 1, 0, 0, 0, 1, 0],
                    [0, 1, 0, 0, 0, 1, 0],
                    [0, 1, 1, 1, 1, 0, 0],
                ]

            case 'C':
                return [
                    [0, 1, 1, 1, 1, 1, 0],
                    [0, 1, 0, 0, 0, 0, 0],
                    [0, 1, 0, 0, 0, 0, 0],
                    [0, 1, 0, 0, 0, 0, 0],
                    [0, 1, 0, 0, 0, 0, 0],
                    [0, 1, 0, 0, 0, 0, 0],
                    [0, 1, 1, 1, 1, 1, 0],
                ]

            case ' ':
                return [
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                ]

            default:
                return [
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 0, 0, 0, 1, 1],
                    [1, 0, 1, 0, 1, 0, 1],
                    [1, 0, 0, 1, 0, 0, 1],
                    [1, 0, 1, 0, 1, 0, 1],
                    [1, 1, 0, 0, 0, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                ]
                break;
        }

    }
}
