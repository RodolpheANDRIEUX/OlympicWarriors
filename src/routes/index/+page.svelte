<script>
    export let users;
</script>

{#if users.length > 0}
    <ul>
        {#each users as user}
            <li>{user.name}</li>
        {/each}
    </ul>
{:else}
    <p>Aucun utilisateur trouvé.</p>
{/if}
