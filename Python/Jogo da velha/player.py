import math
import random
from game import jogo_da_velha as jv

class Player():
  def __init__(self, letra):
    self.letra = letra

  def jogada(self, jogada):
    pass

class HumanPlayer(Player):
  def __init__(self, letra):
    super().__init__(letra)

  def jogada(self, game):
    casa_valida = False
    val = None
    while not casa_valida:
      casa = input(self.leter + '\'s vez. insira um numero entre 0-8:')
      val = int(casa)
      if val not in jv.veric_movimentos():
        casa_valida = True


class ComputerPlayer(Player):
  def __init__(self, letra):
    super().__init__(letra)
