<template>
  <div>
    <p>
    	<a href="/dashboard/leads">View Leads</a>
    	<a href="#" @click.stop="$emit('logout')">Logout</a>
    </p>
    <p>(c) 2018 David A. Powers</p>
  </div>
                    
</template>

<script>
export default {
 
}
</script>
