var character = {
    name: "İzavel",
    bp: -400,
    essence: -6,

    personal_data: {
        name: "İzavel Bey",
        metatype: "Elven",
        ethnicity: "Turkish",
        gender: "Female",
        age: 28,
        height: "1.82m",
        weight: "63kg",
        karma: "0/0",
        street_cred: 0,
        notoriety: 0,
        y: 600,

        starting: {
            bp: 30,
        },
    },

    attributes: {
        body: 3,
        agility: 4,
        reaction: 2,
        strength: 2,
        charisma: 4,
        intuition: 5,
        logic: 4,
        willpower: 3,
        edge: 3,
        essence: 3.85,
        initiative: 7,
        initiative_passes: 1,

        bp: 180,
        kp: -27,
    },

    qualities: {
        list: [ {
            name: "Bilingual",
            description: "is a second-generation immigrant from Turkey.",
            bp: 5,
        }, {
            name: "Human-Looking",
            description: "wears a head-scarf, hiding her ears.",
            bp: 5,
        } ],
    },

    skills: {
        list: [ {
            name: "Combat",
            skills: [ {
                name: "Dodge",
                attribute: "Reaction",
                value: 3,
                bp: 12,
            }, {
                name: "Longarms",
                attribute: "Agility",
                value: 1,
                bp: 4,
            }, {
                name: "Melee Combat",
                attribute: "Agility",
                value: 3,
                specialization: "Cyber-Implants",
                bp: 14,
            }, {
                name: "Pistols",
                attribute: "Agility",
                value: 4,
                bp: 16,
            } ],
        }, {
            name: "Physical",
            skills: [ {
                name: "Athletics",
                value: 2,
                group: [ {
                    name: "Climbing",
                    attribute: "Strength",
                }, {
                    name: "Gymnastics",
                    attribute: "Agility",
                }, {
                    name: "Running",
                    attribute: "Strength",
                }, {
                    name: "Swimming",
                    attribute: "Strength",
                } ],
                bp: 20,
            }, {
                name: "Navigation",
                attribute: "Intuition",
                value: 2,
                bp: 8,
            }, {
                name: "Perception",
                attribute: "Intuition",
                value: 5,
                specialization: "Visual",
                bp: 22,
            }, {
                name: "Shadowing",
                attribute: "Intuition",
                value: 1,
                bp: 4,
            } ],
        }, {
            name: "Technical",
            skills: [ {
                name: "Artisan",
                attribute: "Intuition",
                value: 5,
                specialization: "AR",
                bp: 22,
            }, {
                name: "Computer",
                attribute: "Logic",
                value: 2,
                bp: 8,
            }, {
                name: "Hardware",
                attribute: "Logic",
                value: 2,
                bp: 8,
            } ],
        }, {
            name: "Knowledge",
            skills: [ {
                name: "Art History",
                attribute: "Logic",
                value: 3,
                kp: 3,
            }, {
                name: "Biology",
                attribute: "Logic",
                value: 2,
                specialization: "Anatomy",
                kp: 3,
            }, {
                name: "Corporate Advertising",
                attribute: "Logic",
                value: 3,
                kp: 3,
            }, {
                name: "Local Area Knowledge",
                attribute: "Intuition",
                value: 4,
                kp: 4,
            }, {
                name: "Public Radio Programming",
                attribute: "Intuition",
                value: 2,
                kp: 2,
            }, {
                name: "Puppetry",
                attribute: "Intuition",
                value: 3,
                kp: 3,
            }, {
                name: "Security Systems",
                attribute: "Logic",
                value: 4,
                kp: 4,
            } ],
        }, {
            name: "Language",
            skills: [ {
                name: "Turkish",
                value: "N",
            }, {
                name: "English",
                value: "N",
            }, {
                name: "Arabic",
                value: 2,
                specialization: "Qur'anic",
                kp: 3,
            }, {
                name: "Japanese",
                value: 2,
                kp: 2,
            } ],
        } ],
    },

    gear: {
        ranged_weapons: {
            list: [ {
                name: "Heavy Pistols",
                list: [ {
                    name: "Ares Predator IV",
                    damage: "5P",
                    ap: -1,
                    mode: "SA",
                    ammo: "15 (c)",
                    y: 350,

                    addons: [ {
                        name: "Smart Firing Platform",
                        y: 2000,
                    }, {
                        name: "Spare Clips",
                        y: 80,
                        count: 16,
                    } ],
                } ],
            } ],
        },

        explosives: {
            list: [ {
                name: "Grenades",
                list: [ {
                    name: "Gas (CS/Tear Gas)",
                    blast: "10m Radius",
                    y: 640,
                    count: 16,
                } ],
            } ],
        },

        armor: {
            list: [ {
                name: "Armor",
                list: [ {
                    name: "Lined Coat",
                    body: 6,
                    impact: 4,
                    y: 700,
                } ],
            } ],
        },
        
        personal: {
            name: "Personal",

            list: [ {
                name: "Lifestyle",
                list: [ {
                    name: "Low (4 Months)",
                    y: 8000,
                } ],
            }, {
                name: "ID/Credsticks",
                list: [ {
                    name: "Fake SIN (Jen Dink, Rating 4)",
                    y: 4000,

                    addons: [ {
                        name: "Fake License (Pistols, Rating 4)",
                        y: 400,
                    }, {
                        name: "Fake License (Concealed Carry, Rating 4)",
                        y: 400,
                    } ],
                }, {
                    name: "Fake SIN (Wendy Oz, Rating 3)",
                    y: 3000,
                } ],
            } ],
        },
        
        tools: {
            name: "Tools",

            list: [ {
                name: "Tools",
                list: [ {
                    name: "Kit (Electronics)",
                    y: 500,
                }, {
                    name: "Kit (Hardware)",
                    y: 500,
                } ],
            }, {
                name: "Breaking and Entering Tools",
                list: [ {
                    name: "Autopicker (Rating 2)",
                    y: 400,
                }, {
                    name: "Wire Clippers",
                    y: 25,
                } ],
            }, {
                name: "Biotech",
                list: [ {
                    name: "Medkit (Rating 5)",
                    y: 500,

                    addons: [ {
                        name: "Medkit Supplies",
                        y: 200,
                        count: 4,
                    } ],
                } ],
            } ],
        },
        
        electronics: {
            name: "Electronics",

            list: [ {
                name: "Matrix Programs",
                list: [ {
                    name: "Common Use (Analyze, Rating 3)",
                    y: 150,
                }, {
                    name: "Common Use (Edit, Rating 5)",
                    y: 500,
                }, {
                    name: "Hacking (ECCM, Rating 3)",
                    y: 1500,
                } ],
            }, {
                name: "Skillsofts",
                list: [ {
                    name: "Activesoft (Locksmith 3)",
                    y: 30000,
                }, {
                    name: "Activesoft (Medicine 1)",
                    y: 10000,
                }, {
                    name: "Linguasoft (Spanish 2)",
                    y: 1000,
                } ],
            }, {
                name: "Visual Sensors",
                list: [ {
                    name: "Contact Lenses (Rating 3)",
                    y: 150,

                    addons: [ {
                        name: "Vision Enhancement (Rating 2)",
                        y: 200,
                    }, {
                        name: "Vision Magnification",
                        y: 200,
                    } ],
                }, {
                    name: "Camera (Micro, Rating 1, Signal 2)",
                    y: 800,
                    count: 8,
                } ],
            }, {
                name: "Audio Sensors",
                list: [ {
                    name: "Microphone (Rating 3)",
                    y: 150,

                    addons: [ {
                        name: "Audio Enhancement (Rating 2)",
                        y: 200,
                    }, {
                        name: "Spatial Recognizer",
                        y: 100,
                    } ],
                }, {
                    name: "Microphone (Micro, Rating 1, Signal 2)",
                    y: 200,
                    count: 4,
                } ],
            } ],
        },
        
        cyberware: {
            name: "Cyberware",

            list: [ {
                name: "Headware",
                list: [ {
                    name: "Commlink",
                    essence: 0.20,
                    y: 2000,

                    addons: [ {
                        name: "Fairlight Caliban (Response 4, Signal 5)",
                        y: 8000,
                    }, {
                        name: "Novatech Navi (Firewall 3, System 4)",
                        y: 1500,
                    } ],
                }, {
                    name: "Datajack",
                    essence: 0.10,
                    y: 500,
                }, {
                    name: "Olfactory Booster (Rating 3)",
                    essence: 0.20,
                    y: 3000,
                }, {
                    name: "Sim Module",
                    essence: 0.20,
                    y: 2000,
                } ],
            }, {
                name: "Eyeware",
                list: [ {
                    name: "Image Link",
                    essence: 0.10,
                    y: 500,
                }, {
                    name: "Smartlink",
                    essence: 0.10,
                    y: 1000,
                } ],
            }, {
                name: "Earware",
                list: [ {
                    name: "Sound Link",
                    essence: 0.10,
                    y: 250,
                } ],
            }, {
                name: "Bodyware",
                list: [ {
                    name: "Camera (Handheld, Right hand, Rating 5)",
                    essence: 0.10,
                    y: 750,

                    addons: [ {
                        name: "Thermographic Vision",
                        y: 100,
                    }, {
                        name: "Vision Enhancement (Rating 3)",
                        y: 300,
                    } ],
                }, {
                    name: "Flashlight (Low-light, Left hand)",
                    essence: 0.10,
                    y: 250,
                }, {
                    name: "Skillwires (Rating 3)",
                    essence: 0.60,
                    y: 6000,
                }, {
                    name: "Touch Link",
                    essence: 0.10,
                    y: 1000,
                } ],
            }, {
                name: "Cyber-Implant Weapons",
                list: [ {
                    name: "Shock Hand (Damage 6S(e), AP -half)",
                    essence: 0.25,
                    y: 1000,
                } ],
            } ],
        },

        starting: {
            y: -94995,
            bp: 19,
        },
    },

    contacts: {
        list: [ {
            name: "I Building",

            description: [
                "<p>",
                    "İzavel's residence is in I Building, a run-down six-story building that ",
                    "might be termed an art collective.  The first through fifth floors are ",
                    "occupied by artists, and the ground floor houses a gallery of their work.  ",
                    "A few of the inhabitants with well-to-do and over-indulging parents are the ",
                    "actual owners of the building, and everyone else is technically squatting ",
                    "(though it is expected that they contribute rent nonetheless).",
                "</p>",
                "<p>",
                    "There was at one point a working elevator in the building, but it broke ",
                    "down at some point after it was abandoned and has not been repaired.  ",
                    "İzavel lives in the converted shaft, with her bed on top of the car, which ",
                    "is stalled at the third floor.  When subscribed to her AR layers, the shaft ",
                    "might appear variously as the vine-covered interior of a tree; or a minaret ",
                    "over İstanbul.</p><p>There is no general agreement amongst the inhabitants ",
                    "as to what, if anything, the I stands for.  Since the name was decided ",
                    "verbally, the spelling is not even unanimous: a few claim it is <q>Eye ",
                    "Building;</q> Pirate Pete (who flies a Jolly Roger from the roof) claims it ",
                    "is <q>Aye Building.</q>",
                "</p>"
            ],
        }, {
            name: "Elias Konerding",

            rating: {
                connection: 2,
                loyalty: 5,
            },
            bp: 7,
            description: [
                "<p>",
                    "Elias is a dwarf who lives on the third floor of I Building.  He does ",
                    "metalwork: as a sculptor when contributing to the ground floor gallery; as ",
                    "a weaponsmith for a hobby; or as a jeweler for some of the money needed to ",
                    "pay his keep.  He also works as a mechanic, which is where he derives most ",
                    "of his income from.",
                "</p>",
                "<p>",
                    "His home is decorated with columns and ceremonial axes.  There is an ",
                    "axehead/double arrow (&#x2b0c;) motif visible throughout an AR overlay ",
                    "contributed by İzavel.",
                "</p>",
            ],
        }, {
            name: "Picardy Third",

            rating: {
                connection: 2,
                loyalty: 2,
            },
            bp: 4,
            description: [
                "<p>",
                    "Picardy Third are three sisters who live in I Building.  They are not ",
                    "usually seen together, but are always linked wirelessly.  When one is ",
                    "speaking, the others always speak through her in three-part harmony.  They ",
                    "are fraternal, not identical triplets, but are nonetheless nearly ",
                    "impossible to tell apart (not that it would matter anyway).",
                "</p>",
                "<p>",
                    "Usually, one of them is working in their studio, while the other two wander ",
                    "the city.  The one in the studio will paint objects and places seen by the ",
                    "other two using some combination of their perspectives.  They can astrally ",
                    "perceive, so the painting may additionally show astral phenomena, but they ",
                    "otherwise have not been known to perform magic.",
                "</p>",
                "<p>",
                    "When working on artwork as a trio, most of their output is loosely ",
                    "metahuman sculpture&mdash;loosely, in that the bodies never have the right ",
                    "numbers of body parts, and that the parts are not always in the right place.",
                "</p>",
            ],
        }, {
            name: "Tom Koch",

            rating: {
                connection: 3,
                loyalty: 1,
            },
            bp: 4,
            description: [
                "<p>",
                    "Tom Koch runs a kosher deli in the neighborhood of I Building.  He ",
                    "frequently hears local gossip and makes excellent sandwiches.  He has many ",
                    "cats (all bugged) who are always around the deli, it maybe is not very ",
                    "sanitary.",
                "</p>",
                "<p>",
                    "See also: <a href=\"http://kochsdeli.com/\">Koch's Deli</a>.",
                "</p>",
            ],
        }, {
            name: "Reinhard Rand",

            rating: {
                connection: 1,
                loyalty: 1,
            },
            bp: 2,
            description: [
                "<p>",
                    "Reinhart insists anyone to whom he sells information refer to him by his ",
                    "self-selected code name, <q>The Fox.</q>  It's not a very good code name, ",
                    "and he's not very good at gathering information.",
                "</p>",
                "<p>",
                    "He mostly hangs out at donut shops hoping to overhear contract policemen ",
                    "and rent-a-cops.  They are all aware of him and know not to discuss ",
                    "anything confidential.  However, he can sometimes be a useful channel for ",
                    "deliberately leaking information, or seeding false information, so they ",
                    "usually provide bits of largely irrelevant but true information.  Also, ",
                    "they are slightly offended by his use of the stereotype, but don't mind an ",
                    "excuse to go for donuts when they want to spread information.",
                "</p>",
            ],
        }, {
            name: "Wolf & Wolfe",

            rating: {
                connection: 4,
                loyalty: 2,
            },
            bp: 6,
            description: [
                "<p>",
                    "Wolf (<q>Wolf, without an <q>E</q>, as in Amazonia!</q>) and Wolfe ",
                    "(<q>Wolfe, with an <q>E</q>, as in eight!</q>) are a pair of detectives who ",
                    "are frequently entrusted with important tasks despite their general ",
                    "inability to carry them out.  Typically, they succeed at gathering all the ",
                    "necessary information, then use it to draw the wrong conclusions.",
                "</p>",
                "<p>",
                    "See also: ",
                    "<a href=\"http://en.wikipedia.org/wiki/Thomson_and_Thompson\">Thomson and ",
                    "Thompson</a>.",
                "</p>",
            ],
        } ],
    },

    background: {
        list: [ {
            name: "İzavel",
            description: [
            ],
        }, {
            name: "Fake SINs",
            description: [
                "<p>",
                    "Wendy Oz is a freelancer who does occasional graphic design work for small ",
                    "companies, mainly in the UCAS.  She meets clients in the Matrix, rather ",
                    "than face-to-face, so as to conceal her real identity.",
                "</p>",
            ],
        } ],
    },

    history: [ {
        name: "Initial money: 3d6 * 50",
        y: -600,
    } ],
};
