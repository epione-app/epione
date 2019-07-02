<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 md8 lg4 pa-2>
        <v-card dark color="accent">
          <v-card-title class="headline font-weight-black"  >
            <!-- get first name, usually split by spaces, otherwise
            it'll be the whole name. -->
            Welcome to Epione
            {{ 
              userName 
              ? ", " + userName.split(' ')[0] 
              : "" 
            }}!
          </v-card-title>
          <v-card-text>
            <div class="body-1">
              This is the minimum viable product for our Hot Topic in Software project! <br />
              Still kind of broken, still WIP <br />
              Our main functionalities made it in on time though!<br />
              <strong>
                This is not medical help, only advice on how to cope.
                if you require medical assistance, 
                please visit your local heath service.
              </strong>
            </div>
          </v-card-text>
        </v-card>
      </v-flex >
    </v-layout>
    
    <v-layout justify-center> 
      <v-flex xs12 md8 lg4 pa-2>
        <v-card dark color="info" height="100%">
          <v-card-title class="headline justify-center font-weight-bold">
            Journal Count
            </v-card-title>
          <v-card-text class="body font-weight-light-italic">
            You have 
            {{
              // is userJournals truthy? ie: exists or has a value
              this.userJournals ? Object.keys(this.userJournals).length : 0
            }}
            journal entries saved.
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md8 lg4 pa-2>
        <v-card height="100%">
          <v-card-title class="headline justify-center font-weight-bold">
            Like our app?
          </v-card-title>
          <v-card-text>
            Feel free to contribute your own functionality to our application with a Vue component! <br />
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn 
              href="https://github.com/epione-app/epione" 
              color="primary"
            >
              <v-icon left>fab fa-github-square</v-icon>
              <span>Fork us</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout justify-center>
      <v-flex xs12 md8 pa-2>
        <v-card dark color="ternary">
          <v-card-title class="headline font-weight-bold">
            About Anxiety and Panicking
          </v-card-title>
          <v-card-text>
          <span class="subheading">What is Anxiety?</span> <br />
          <p class="body">
            A general description of Anxiety is given by Youthline as follows: <br />
            when you are constantly worrying all the time about lots of different things and finding it hard to stop worrying and just chill. 
            You might worry about how you are doing in school or at work, what’s going to happen the next day, “what if” this and that. 
            Your worrying gets in the way of you living your life how you like to live it. <br />
          </p>
          <span class="subheading font-weight-medium">What types of Anxiety are there?</span> <br /> 
          <p class="body">
            Anxiety is a subset of disorders in mental health, here are some types: <br />
            <ul>
              <li><span class="subheading">Separation Anxiety</span>
                <p class="body">
                  Worrying a lot when away from caregivers that something awful is going to happen to them or that they will die or you will be separated from them. 
                  You may feel like you don’t want to go out or be away from them in case something bad happens to them. 
                  You might even feel sick when they are away or say they are going away or tell them you are so they don’t go.
                </p>
              </li>
              <li><span class="subheading">Phobias</span>
                <p class="body">
                  Phobias are when you get really really scared about a specific object or situation. 
                  These things make you feel really panicky every time you’re faced with them and get in the way of you living your life how you’d like.
                </p>
              </li>
              <li><span class="subheading">Obsessive Compulsive Disorder (OCD)</span>
                <p class="body">
                  OCD is when you have recurrent persistent and unwanted thoughts or urges or image and also behaviours or mental acts that you have to do in order to get rid of those thoughts. 
                  This could include tapping, counting, cleaning, checking over things, or doing things in a specific order in order to stop the thoughts.
                </p>
              </li>
              <li><span class="subheading">Post Traumatic Stress Disorder (PTSD)</span>
                <p class="body">
                  PTSD can happen to some people after something traumatic has happened. 
                  This trauma could either have happened to you, you have witnessed it happening to someone else, 
                  or you heard about it happening to a close family member or friend. 
                  These traumatic events could include death or near death experience, serious injury or sexual violence. 
                  It includes memories of the traumatic event flooding back, distressing dreams about it or flashbacks where you feel like 
                  the traumatic event is happening all over again. You may be really jumpy, be irritable, and have trouble sleeping. 
                  You may also try to avoid anything that might remind you of the event. You might start to feel really low or guilty or bad about yourself.
                </p>
              </li>
            </ul>
          </p>
          <span class="subheading font-weight-medium">How can I cope?</span> <br />
            Youthline gives the following advice: <br />
            <span class="subheading font-weight-medium">

            </span>
            Calming your body lets it know there is no actual danger and so it doesn't need to move into a stress response. You can do this by:
            <ul>
              <li>Doing some deep and slow breathing</li>
              <li>Doing a meditation</li>
              <li>Going for a walk</li>
              <li>Having a cup of tea and a breather</li>
              <li>Taking a shower or bath</li>
              <li>Snuggling under a heavy blanket or wrapping yourself in covers</li>
            </ul>
            <span class="subheading font-weight-medium">Reset your thoughts.</span> 
            <ul>
              <li>Writing or drawing in a journal</li>
              <li>Watching TV, a dvd or Youtube clips</li>
              <li>Going on social media and websites</li>
              <li>Playing a puzzle or game online or on your phone</li>
              <li>Read a book or magazine</li>
              <li>Plan and organize the space you’re in or upcoming occasions</li>
              <li>Doing other things you enjoy doing</li>
            </ul>
            <p class="body">​
              Talk to someone about how you are feeling. Often getting some support and understanding, 
              or even just a hug or some company can really help. Think about who is in your life who you can hang out with and cares about you.
              Seek professional support. If your anxiety is feeling unmanageable, 
              you feel like you need new strategies to deal with it or it's getting in the way of living your life how you would like, 
              then talking to a professional can be really useful.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <span class="caption font-weight-bold">Information retrieved from Youthline</span>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import firebase from 'firebase/app'
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(["userName", "userJournals"]),
    }
  }
</script>
