(function($, undefined) {

    try {

    var templates = {};

    var simple_formatters = {
        html: function(input) {
            if (input === undefined) {
                throw new Error("input is undefined");
            } else if (input === null) {
                return "null";
            } else {
                return input.toString()
                    .replace(/&/g,'&amp;')
                    .replace(/>/g,'&gt;')
                    .replace(/</g,'&lt;')
                    .replace(/"/g,'&quot;');
            }
        },
        id: function(input) {
            if (input === undefined) {
                throw new Error("input is undefined");
            }
            return input
                .toLowerCase()
                .replace(/[^a-z0-9-]/g, '-');
        },
        raw: function(input) {
            if (input === undefined) {
                throw new Error("input is undefined");
            }
            return input;
        },
    };

    function Template(name, template_str) {
        templates[name] = jsontemplate.Template(template_str, {
            default_formatter: "html",
            more_formatters: function(formatterName) {
                var match;
                if (formatterName in simple_formatters) {
                    return simple_formatters[formatterName];
                } else if (match = /^default(?: (.+))?$/.exec(formatterName)) {
                    return function(input) {
                        if (input === undefined) {
                            if (match[1]) {
                                return JSON.parse(match[1]);
                            }
                        }
                        return input;
                    };
                } else if (match = /^name (.+)$/.exec(formatterName)) {
                    return function(input) {
                        if (input !== undefined) {
                            return {
                                name: match[1],
                                value: input,
                            };
                        }
                    };
                } else if (match = /^append (.+)$/.exec(formatterName)) {
                    return function(input) {
                        return input + match[1];
                    };
                } else if (match = /^slice(?: (\d+)(?: (\d+))?)?$/.exec(formatterName)) {
                    return function(input) {
                        return input.slice(match[1], match[2]);
                    };
                } else {
                    return function(input) {
                        if (typeof input === "object") {
                            if (typeof input.map === "function") {
                                return input.map(function(item) {
                                    return templates[formatterName].expand(item);
                                }).join('');
                            }
                        }
                        if (input !== undefined) {
                            return templates[formatterName].expand(input);
                        }
                    };
                }
            },
        });
    }

    Template("bp_cost", "<li class='bp cost'>{@} BP</li>");
    Template("kp_cost", "<li class='kp cost'>{@} KP</li>");
    Template("pp_cost", "<li class='pp cost'>{@} PP</li>");
    Template("essence_cost", "<li class='essence cost'>{@} Essence</li>");
    Template("y_cost", "<li class='y cost'>{@}¥</li>");

    Template(
        "costs",
        " (" +
        "<ul class='costs'>" +
            "{bp|bp_cost}" +
            "{kp|kp_cost}" +
            "{pp|pp_cost}" +
            "{essence|essence_cost}" +
            "{y|y_cost}" +
        "</ul>" +
        ")");

    Template(
        "stat",
        "<li id='{name|id}' class='attribute'>" +
            "<span class='value'>{value}</span>" +
            "<span class='name'>{name}</span>" +
        "</li>");

    Template(
        "personal_data",
        "<div id='personal-data'>" +
            "<h2>" +
                "Personal Data{cost|costs}" +
                "<a class='headerlink' href='#personal-data'>¶</a>" +
            "</h2>" +
            "<ul class='stats'>" +
                "{name|name Name|stat}" +
                "{metatype|name Metatype|stat}" +
                "{ethnicity|name Ethnicity|stat}" +
                "{gender|name Gender|stat}" +
                "{age|name Age|stat}" +
                "{height|name Height|stat}" +
                "{weight|name Weight|stat}" +
                "{y|append ¥|name Money|stat}" +
                "{karma|name Karma|stat}" +
                "{street_cred|name Street Cred|stat}" +
                "{notoriety|name Notoriety|stat}" +
            "</ul>" +
        "</div>");

    Template(
        "attributes",
        "<div id='attributes'>" +
            "<h2>" +
                "Attributes{cost|costs}" +
                "<a class='headerlink' href='#attributes'>¶</a>" +
            "</h2>" +
            "<ul class='stats'>" +
                "{body|name Body|stat}" +
                "{agility|name Agility|stat}" +
                "{reaction|name Reaction|stat}" +
                "{strength|name Strength|stat}" +
                "{charisma|name Charisma|stat}" +
                "{intuition|name Intuition|stat}" +
                "{logic|name Logic|stat}" +
                "{willpower|name Willpower|stat}" +
                "{magic|name Magic|stat}" +
                "{resonance|name Resonance|stat}" +
                "{edge|name Edge|stat}" +
                "{essence|name Essence|stat}" +
                "{initiative|name Initiative|stat}" +
                "{initiative_passes|name Initiative Passes|stat}" +
            "</ul>" +
        "</div>");

    Template("quality", "<li class='quality'>{name}: {description}</li>");

    Template(
        "qualities",
        "<div id='qualities'>" +
            "<h2>" +
                "Qualities{cost|costs}" +
                "<a class='headerlink' href='#qualities'>¶</a>" +
            "</h2>" +
            "<ul>" +
                "{list|quality}" +
            "</ul>" +
        "</div>");

    Template("skill_value", "<span class='value'>{@}</span>");
    Template(
        "skill_attribute", "<a title='{@}' class='attribute' href='#{@|id}'>{@|slice 0 1}</a>");
    Template("skill_specialization", " (<span class='specialization'>{@}</span> +2)");
    Template("skill_group", "<ul>{@|skill}</ul>");

    Template(
        "skill",
        "<li class='skill'>" +
            "{value|skill_value}" +
            "<span class='name'>{name}</span>" +
            "{attribute|skill_attribute}" +
            "{specialization|skill_specialization}" +
            "{group|skill_group}" +
        "</li>");

    Template(
        "skill_category",
        "<div id='skills-{name|id}' class='skills'>" +
            "<h3>" +
                "{name}{cost|costs}" +
                "<a class='headerlink' href='#skills-{name|id}'>¶</a>" +
            "</h3>" +
            "<ul>{skills|skill}</ul>" +
        "</div>");

    Template(
        "skills",
        "<div id='skills'>" +
            "<h2>" +
                "Skills{cost|costs}" +
                "<a class='headerlink' href='#skills'>¶</a>" +
            "</h2>" +
            "{list|skill_category}" +
        "</div>");

    Template(
        "regular_gear",
        "<tr>" +
            "<td class='count'>{count|default 1}</td>" +
            "<td class='name'>{name}</td>" +
            "<td class='cost'>{y}¥</td>" +
        "</tr>");

    Template(
        "regular_gear_set",
        "<tbody class='set'>" +
            "{@|regular_gear}" +
            "{addons|regular_gear}" +
        "</tbody>");

    Template(
        "regular_gear_group",
        "<tr>" +
            "<th class='count'></th>" +
            "<th class='name'>{name}</th>" +
            "<th class='cost'>Cost</th>" +
        "</tr>" +
        "{list|regular_gear_set}");

    Template(
        "melee_weapon_gear",
        "<tr class='sub'>" +
            "<td class='count'>{count|default 1}</td>" +
            "<td class='name'>{name}</td>" +
            "<td class='reach'>{reach}</td>" +
            "<td class='damage'>{damage}</td>" +
            "<td class='ap'>{ap}</td>" +
            "<td class='cost'>{y}¥</td>" +
        "</tr>");

    Template(
        "melee_weapon_gear_set",
        "<tbody class='set'>" +
            "{@|melee_weapon_gear}" +
            "{addons|melee_weapon_gear}" +
        "</tbody>");

    Template(
        "melee_weapon_gear_group",
        "<tr>" +
            "<th class='count'></th>" +
            "<th class='name'>{name}</th>" +
            "<th class='reach'>Reach</th>" +
            "<th class='damage'>Damage</th>" +
            "<th class='ap'>AP</th>" +
            "<th class='cost'>Cost</th>" +
        "</tr>" +
        "{list|melee_weapon_gear_set}");

    Template(
        "ranged_weapon_gear",
        "<tr class='sub'>" +
            "<td class='count'>{count|default 1}</td>" +
            "<td class='name'>{name}</td>" +
            "<td class='damage'>{damage|default \"–\"}</td>" +
            "<td class='ap'>{ap|default \"–\"}</td>" +
            "<td class='mode'>{mode|default \"–\"}</td>" +
            "<td class='rc'>{rc|default \"–\"}</td>" +
            "<td class='ammo'>{ammo|default \"–\"}</td>" +
            "<td class='cost'>{y}¥</td>" +
        "</tr>");

    Template(
        "ranged_weapon_gear_set",
        "<tbody class='set'>" +
            "{@|ranged_weapon_gear}" +
            "{addons|ranged_weapon_gear}" +
        "</tbody>");

    Template(
        "ranged_weapon_gear_group",
        "<tr>" +
            "<th class='count'></th>" +
            "<th class='name'>{name}</th>" +
            "<th class='damage'>Damage</th>" +
            "<th class='ap'>AP</th>" +
            "<th class='mode'>Mode</th>" +
            "<th class='rc'>RC</th>" +
            "<th class='ammo'>Ammo</th>" +
            "<th class='cost'>Cost</th>" +
        "</tr>" +
        "{list|ranged_weapon_gear_set}");

    Template(
        "explosives_gear",
        "<tr class='sub'>" +
            "<td class='count'>{count|default 1}</td>" +
            "<td class='name'>{name}</td>" +
            "<td class='damage'>{damage|default \"–\"}</td>" +
            "<td class='ap'>{ap|default \"–\"}</td>" +
            "<td class='blast'>{blast|default \"–\"}</td>" +
            "<td class='cost'>{y}¥</td>" +
        "</tr>");

    Template(
        "explosives_gear_set",
        "<tbody class='set'>" +
            "{@|explosives_gear}" +
            "{addons|explosives_gear}" +
        "</tbody>");

    Template(
        "explosives_gear_group",
        "<tr>" +
            "<th class='count'></th>" +
            "<th class='name'>{name}</th>" +
            "<th class='damage'>Damage</th>" +
            "<th class='ap'>AP</th>" +
            "<th class='blast'>Blast</th>" +
            "<th class='cost'>Cost</th>" +
        "</tr>" +
        "{list|explosives_gear_set}");

    Template(
        "armor_gear",
        "<tr class='sub'>" +
            "<td class='count'>{count|default 1}</td>" +
            "<td class='name'>{name}</td>" +
            "<td class='body'>{body|default \"–\"}</td>" +
            "<td class='impact'>{impact|default \"–\"}</td>" +
            "<td class='cost'>{y}¥</td>" +
        "</tr>");

    Template(
        "armor_gear_set",
        "<tbody class='set'>" +
            "{@|armor_gear}" +
            "{addons|armor_gear}" +
        "</tbody>");

    Template(
        "armor_gear_group",
        "<tr>" +
            "<th class='count'></th>" +
            "<th class='name'>{name}</th>" +
            "<th class='body'>Body</th>" +
            "<th class='impact'>Impact</th>" +
            "<th class='cost'>Cost</th>" +
        "</tr>" +
        "{list|armor_gear_set}");

    Template(
        "cyberware_gear",
        "<tr class='sub'>" +
            "<td class='count'>{count|default 1}</td>" +
            "<td class='name'>{name}</td>" +
            "<td class='essence'>{essence|default \"–\"}</td>" +
            "<td class='cost'>{y}¥</td>" +
        "</tr>");

    Template(
        "cyberware_gear_set",
        "<tbody class='set'>" +
            "{@|cyberware_gear}" +
            "{addons|cyberware_gear}" +
        "</tbody>");

    Template(
        "cyberware_gear_group",
        "<tr>" +
            "<th class='count'></th>" +
            "<th class='name'>{name}</th>" +
            "<th class='essence'>Essence</th>" +
            "<th class='cost'>Cost</th>" +
        "</tr>" +
        "{list|cyberware_gear_set}");

    Template(
        "melee_weapons",
        "<div id='gear-melee-weapons'>" +
            "<h3>" +
                "Melee Weapons{cost|costs}" +
                "<a class='headerlink' href='#gear-melee-weapons'>¶</a>" +
            "</h3>" +
            "<table>{list|melee_gear_group}</table>" +
        "</div>");

    Template(
        "ranged_weapons",
        "<div id='gear-ranged-weapons'>" +
            "<h3>" +
                "Ranged Weapons{cost|costs}" +
                "<a class='headerlink' href='#gear-ranged-weapons'>¶</a>" +
            "</h3>" +
            "<table>{list|ranged_weapon_gear_group}</table>" +
        "</div>");

    Template(
        "explosives",
        "<div id='gear-explosives'>" +
            "<h3>" +
                "Explosives{cost|costs}" +
                "<a class='headerlink' href='#gear-explosives'>¶</a>" +
            "</h3>" +
            "<table>{list|explosives_gear_group}</table>" +
        "</div>");

    Template(
        "armor",
        "<div id='gear-armor'>" +
            "<h3>" +
                "Armor{cost|costs}" +
                "<a class='headerlink' href='#gear-armor'>¶</a>" +
            "</h3>" +
            "<table>{list|armor_gear_group}</table>" +
        "</div>");

    Template(
        "personal",
        "<div id='gear-personal'>" +
            "<h3>" +
                "Personal{cost|costs}" +
                "<a class='headerlink' href='#gear-personal'>¶</a>" +
            "</h3>" +
            "<table>{list|regular_gear_group}</table>" +
        "</div>");

    Template(
        "tools",
        "<div id='gear-tools'>" +
            "<h3>" +
                "Tools{cost|costs}" +
                "<a class='headerlink' href='#gear-tools'>¶</a>" +
            "</h3>" +
            "<table>{list|regular_gear_group}</table>" +
        "</div>");

    Template(
        "electronics",
        "<div id='gear-electronics'>" +
            "<h3>" +
                "Electronic{cost|costs}" +
                "<a class='headerlink' href='#gear-electronics'>¶</a>" +
            "</h3>" +
            "<table>{list|regular_gear_group}</table>" +
        "</div>");

    Template(
        "cyberware",
        "<div id='gear-cyberware'>" +
            "<h3>" +
                "Cyberware{cost|costs}" +
                "<a class='headerlink' href='#gear-cyberware'>¶</a>" +
            "</h3>" +
            "<table>{list|cyberware_gear_group}</table>" +
        "</div>");

    Template(
        "gear",
        "<div id='gear'>" +
            "<h2>" +
                "Gear{cost|costs}" +
                "<a class='headerlink' href='#gear'>¶</a>" +
            "</h2>" +
            "{melee_weapons|melee_weapons}" +
            "{ranged_weapons|ranged_weapons}" +
            "{explosives|explosives}" +
            "{armor|armor}" +
            "{personal|personal}" +
            "{tools|tools}" +
            "{electronics|electronics}" +
            "{cyberware|cyberware}" +
        "</div>");

    Template("contact_rating", " ({connection}/{loyalty})");
    Template("description", "{@|raw}");

    Template(
        "contact",
        "<div id='contacts-{name|id}' class='hyphenate'>" +
            "<h3>" +
                "{name}{rating|contact_rating}" +
                "<a class='headerlink' href='#contacts-{name|id}'>¶</a>" +
            "</h3>" +
            "{description|description}" +
        "</div>");

    Template(
        "contacts",
        "<div id='contacts'>" +
            "<h2>" +
                "Contacts{cost|costs}" +
                "<a class='headerlink' href='#contacts'>¶</a>" +
            "</h2>" +
            "{list|contact}" +
        "</div>");

    Template(
        "background_section",
        "<div id='background-{name|id}'>" +
            "<h3>" +
                "{name}{cost|costs}" +
                "<a class='headerlink' href='#background-{name|id}'>¶</a>" +
            "</h3>" +
            "{description|description}" +
        "</div>");

    Template(
        "background",
        "<div id='background'>" +
            "<h2>" +
                "Background{cost|costs}" +
                "<a class='headerlink' href='#background'>¶</a>" +
            "</h2>" +
            "{list|background_section}" +
        "</div>");

    Template(
        "spare",
        "<div id='spare'>Spare{cost|costs}</div>");

    Template(
        "character",
        "<h1>Character Sheet: {name}{cost|costs}</h1>" +
        "{spare|spare}" +
        "{personal_data|personal_data}" +
        "{attributes|attributes}" +
        "{qualities|qualities}" +
        "{skills|skills}" +
        "{gear|gear}" +
        "{contacts|contacts}" +
        "{background|background}");

    function sumProperty(property, object) {
        var sum = 0;
        if (typeof object.reduce === "function") {
            object.forEach(function(item) {
                sum += sumProperty(property, item);
            });
        } else {
            sum = object[property] || 0;
            for (var key in object) {
                if ((key !== "cost") && (typeof object[key] === "object")) {
                    sum += sumProperty(property, object[key]);
                }
            }
            if (sum) {
                object.cost = object.cost || {};
                object.cost[property] = sum;
            }
        }
        return sum;
    }

    sumProperty("bp", character);
    sumProperty("pp", character);
    sumProperty("kp", character);
    sumProperty("y", character);
    sumProperty("essence", character);

    console.log(JSON.stringify(character, null, '  '));

    console.log(templates.character.expand(character));

    $(function() {
        $("body").html(templates.character.expand(character));
    });

    } catch (e) {
        console.log(e);
        console.log(e.stack);
    }

})(jQuery);
