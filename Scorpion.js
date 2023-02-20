function jouerCoup(x, y) {
    // Vérifiez si le coup est valide
    if (estValide(x, y)) {
      // Mettez à jour le plateau de jeu
      plateau[x][y] = joueurActuel;
      // Changez de joueur
      joueurActuel = (joueurActuel == "rouge") ? "bleu" : "rouge";
    }
  }
  
  function estValide(x, y) {
    // Vérifiez si la case est vide et si elle est adjacente à un pion du joueur actuel
    return (plateau[x][y] == "") && ((x > 0 && plateau[x-1][y] == joueurActuel) || (x < 6 && plateau[x+1][y] == joueurActuel) || (y > 0 && plateau[x][y-1] == joueurActuel) || (y < 6 && plateau[x][y+1] == joueurActuel));
  }
  