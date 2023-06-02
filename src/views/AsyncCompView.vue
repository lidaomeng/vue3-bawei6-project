<template>
    <div>
        <suspense>
            <template #default>
                <async-comp></async-comp>
            </template>
            <template #fallback>
                <teleport-comp></teleport-comp>
            </template>
        </suspense>
    </div>
</template>

<script>
import AsyncComp from '@/components/AsyncComp.vue';
import TeleportComp from '@/components/TeleportComp.vue';

export default {
    components: {
        AsyncComp,
        TeleportComp
    }
}
</script>

