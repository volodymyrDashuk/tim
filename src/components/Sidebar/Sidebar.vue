<template>
  <aside class="sidebar" :class="{active: isOpen}">
    <div class="sidebar-logo">
      logo
    </div>
    <div class="sidebar-content">
      <ul class="navigation-list">
        <li
          v-for="link in links"
          class="navigation-item"
        >
          <router-link
              key="link.url"
              tag="li"
              class="navigation-link"
              active-class="active"
              :to="link.url"
              :exact="link.exact"
          >
            <span :class=link.class></span>
            {{link.title}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="sidebar-footer">
      Sidebar footer
    </div>
  </aside>
</template>

<script src="./model.js"/>
<style lang="scss" src="./styles.scss" />