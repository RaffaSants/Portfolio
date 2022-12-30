class jogo_da_velha():
  def __init__(self):
    self.board = ['' for _ in range(9)]
    self.winner = None

  def mostrar_tabuleiro(self):
    for row in [self.board[i*3:(i+1)*3] for i in range(3)]:
      print('| ' + ' | ' .join(row) + ' |')

  @staticmethod
  def mostrar_tabuleiro_nums():
    num_tabuleiro = [[str(i) for i in range(j*3,(j+1)*3)] for j in range(3)]
    for row in num_tabuleiro:
      print('| ' + ' | ' .join(row) + ' |')

  def veric_movimentos(self):
    return(i for i, spot in enumerate(self.board) if spot == ' ')
    #movimento = []
    #for(i,spot) in enumerate(self.board):
    #  if spot == ' ':
    #    movimento.append(i)
    
    #return movimento