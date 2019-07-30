<template>
  <div class="remote-alga">
    <div class=tabBody>
      <div id=timeBody class=tabData>
        <br />
        <h3>Shortcut Keys:
          <button class=btn @click="command">It is Play Time!</button>
          <button class=btn @click="command">It is Netflix Time!</button>
          <button class=btn @click="command">I Gotta Sleep!</button>
        </h3>
        <div class=row>
          <button class=btn @click="command(commands.VOLUME_UP)">VOL+</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button class=btn @click="command(commands.CHANNEL_UP)">CH +</button>
        </div>
        <div class=row>
          <button class=btn @click="command(commands.VOLUME_DOWN)">VOL-</button>
          <button class=btn @click="command(commands.POWER)">POWER</button>
          <button class=btn @click="command(commands.CHANNEL_UP)">CH -</button>
        </div>
        <div class=row>
          <button class=btn @click="command(commands.MUTE)">MUTE</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button class=btn @click="command(commands.INPUT)">INPUT</button>
        </div>
        <div class=row>
          <button class=btn @click="command(commands.MENU)">MENU</button>
          <button class=btn @click="command(commands.GUIDE)">GUIDE</button>&nbsp;
          <button class=btn @click="command(commands.INFO)">INFO</button>
        </div>
        <br>
        <div class=row>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button class=btn @click="command(commands.UP)">---UP---</button>
        </div>
        <div class=row>
          <button class=btn @click="command(commands.LEFT)"><--</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button class=btn @click="command(commands.OK)">-OK-</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button class=btn @click="command(commands.RIGHT)">--></button>
        </div>
        <div class=row>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button class=btn @click="command(commands.DOWN)">-DOWN-</button>&nbsp;
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commands from '@/lib/commands.json';

export default {
  name: 'remote-alga',
  data() {
    return {
      commands,
      logs: ['Page loaded success'],
    }
  },
  methods: {
    command(value) {
      this.$emit('command', value);
    }
  }
}
</script>

<style scoped>
</style>
