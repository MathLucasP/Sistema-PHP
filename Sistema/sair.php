<?php
//entra na sessão
session_start();

// remove todas as variáveis de sessão
session_unset();

// destrói a sessão
session_destroy();
header("Location: ./index.php", true, 302); exit;
?>