import random

import streamlit as st
import plotly.graph_objects as go

st.set_page_config(
    page_title="Pre-Schism Saints Wheel",
    page_icon="⛪",
    layout="centered",
)

st.title("Pre-Schism Saints Wheel (Catholic + Orthodox)")
st.write(
    """
Spin the wheel to get a randomly selected pre-schism saint who is venerated in **both** the
Catholic and Orthodox churches.  
For each saint you’ll see a short summary, feast day in both traditions, and links to learn more.
"""
)

# -------------------------------------------------------------------
# DATA: Pre-schism saints venerated in both Catholic & Orthodox churches
# (Feast days are given in the current Gregorian calendar; many Orthodox
# Old-Calendar parishes observe them 13 days later.)
# -------------------------------------------------------------------
saints = [
    {
        "name": "St Nicholas of Myra",
        "summary": (
            "4th-century bishop of Myra, famed for generosity and many miracles; "
            "patron of children, sailors, and the poor."
        ),
        "feast_catholic": "December 6",
        "feast_orthodox": "December 6 (New Calendar) / December 19 (Old Calendar)",
        "catholic_link": "https://mycatholic.life/saints/saints-of-the-liturgical-year/december-6-saint-nicholas-bishop-optional-memorial/",
        "orthodox_link": "https://www.oca.org/saints/lives/2025/12/06/103484-saint-nicholas-the-wonderworker-archbishop-of-myra-in-lycia",
    },
    {
        "name": "St Basil the Great",
        "summary": (
            "4th-century bishop of Caesarea, Cappadocian Father, defender of the Nicene faith "
            "and major shaper of Eastern monasticism."
        ),
        "feast_catholic": "January 2",
        "feast_orthodox": "January 1 (plus January 30 with the Three Holy Hierarchs)",
        "catholic_link": "https://catholicnewsherald.com/faith/179-news/faith/faith-jan/150-st-basil-the-great-father-of-eastern-monasticism-feast-day-jan-2",
        "orthodox_link": "https://www.goarch.org/-/stbasil",
    },
    {
        "name": "St Anthony the Great",
        "summary": (
            "Egyptian monk often called the Father of Monasticism, whose life inspired "
            "the Desert Fathers and organized Christian asceticism."
        ),
        "feast_catholic": "January 17",
        "feast_orthodox": "January 17 (22 Tobi in the Coptic calendar)",
        "catholic_link": "https://en.wikipedia.org/wiki/Anthony_the_Great",
        "orthodox_link": "https://www.oca.org/saints/lives/2025/01/17/100216-venerable-and-god-bearing-father-anthony-the-great",
    },
    {
        "name": "St Athanasius of Alexandria",
        "summary": (
            "4th-century bishop of Alexandria, champion of the Nicene Creed and key opponent "
            "of Arianism; often called the ‘Father of Orthodoxy’."
        ),
        "feast_catholic": "May 2",
        "feast_orthodox": "January 18 (Byzantine) / May 2 in some calendars",
        "catholic_link": "https://www.catholicculture.org/culture/liturgicalyear/calendar/day.cfm?date=2025-05-02",
        "orthodox_link": "https://orthodoxwiki.org/Athanasius_of_Alexandria",
    },
    {
        "name": "St John Chrysostom",
        "summary": (
            "Archbishop of Constantinople, one of the greatest Christian preachers; "
            "author of the Divine Liturgy that bears his name."
        ),
        "feast_catholic": "September 13 (Roman Rite)",
        "feast_orthodox": "January 27 (also Sept 14 & Nov 13 in some Orthodox calendars)",
        "catholic_link": "https://www.catholicculture.org/culture/liturgicalyear/calendar/day.cfm?date=2005-09-13",
        "orthodox_link": "https://en.wikipedia.org/wiki/John_Chrysostom",
    },
    {
        "name": "St Catherine of Alexandria",
        "summary": (
            "Early-4th-century virgin-martyr from Alexandria, famed for her wisdom; "
            "patroness of philosophers, students, and unmarried women."
        ),
        "feast_catholic": "November 25",
        "feast_orthodox": "November 24/25 (varies by local tradition)",
        "catholic_link": "https://en.wikipedia.org/wiki/Catherine_of_Alexandria",
        "orthodox_link": "https://www.oca.org/saints/lives/2025/11/24/103382-great-martyr-katherine-of-alexandria",
    },
    {
        "name": "St George the Great-Martyr",
        "summary": (
            "Soldier-martyr and dragon-slayer in Christian legend; patron of many "
            "nations, soldiers, and those in danger."
        ),
        "feast_catholic": "April 23 (transferred if it conflicts with Easter)",
        "feast_orthodox": "April 23 (New Calendar) / May 6 (Old Calendar)",
        "catholic_link": "https://www.catholic.org/saints/saint.php?saint_id=280",
        "orthodox_link": "https://en.wikipedia.org/wiki/Saint_George%27s_Day",
    },
    {
        "name": "St Ambrose of Milan",
        "summary": (
            "4th-century bishop of Milan, defender of the faith and influential in the "
            "conversion of St Augustine; patron of bishops and catechumens."
        ),
        "feast_catholic": "December 7",
        "feast_orthodox": "December 7 (on many Byzantine calendars)",
        "catholic_link": "https://americaneedsfatima.org/articles/saint-ambrose-of-milan",
        "orthodox_link": "https://en.wikipedia.org/wiki/Ambrose",
    },
    {
        "name": "St Augustine of Hippo",
        "summary": (
            "Bishop of Hippo and major Western Church Father; author of *Confessions* "
            "and *City of God*, central to Western theology."
        ),
        "feast_catholic": "August 28",
        "feast_orthodox": "June 15",
        "catholic_link": "https://mycatholic.life/saints/saints-of-the-liturgical-year/august-28st-augustine-of-hippo/",
        "orthodox_link": "https://www.oca.org/saints/lives/2025/06/15/101736-blessed-augustine-bishop-of-hippo",
    },
]

# -------------------------------------------------------------------
# SESSION STATE: track which saint the wheel landed on
# -------------------------------------------------------------------
if "selected_index" not in st.session_state:
    st.session_state["selected_index"] = None

names = [s["name"] for s in saints]
values = [1] * len(saints)

# Highlight the selected slice by “pulling” it out of the wheel
pull = [0] * len(saints)
if st.session_state["selected_index"] is not None:
    pull[st.session_state["selected_index"]] = 0.12

fig = go.Figure(
    data=[
        go.Pie(
            labels=names,
            values=values,
            hole=0.35,
            sort=False,
            direction="clockwise",
            pull=pull,
            textinfo="label",
        )
    ]
)
fig.update_layout(
    margin=dict(l=0, r=0, t=0, b=0),
)

st.subheader("The Wheel")
st.plotly_chart(fig, use_container_width=True)

# -------------------------------------------------------------------
# BUTTON: Spin the wheel
# -------------------------------------------------------------------
if st.button("🎡 Spin the wheel!"):
    st.session_state["selected_index"] = random.randint(0, len(saints) - 1)

# -------------------------------------------------------------------
# “Popup” details for the chosen saint
# -------------------------------------------------------------------
idx = st.session_state["selected_index"]
if idx is not None:
    saint = saints[idx]
    with st.expander(f"Details: {saint['name']}", expanded=True):
        st.markdown(f"**Summary**  \n{saint['summary']}")
        st.markdown(f"**Feast day (Catholic):** {saint['feast_catholic']}")
        st.markdown(f"**Feast day (Orthodox):** {saint['feast_orthodox']}")
        st.markdown(
            f"**Learn more:**  \n"
            f"- [Catholic source]({saint['catholic_link']})  \n"
            f"- [Orthodox source]({saint['orthodox_link']})"
        )

st.caption(
    "Note: Many Orthodox Old-Calendar parishes observe these feasts 13 days later "
    "than the Gregorian dates listed here."
)
